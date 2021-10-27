'use strict';
const socketio = require('socket.io');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const ytdl = require('ytdl-core');


function connectWs(server) {
    const io = new socketio.Server(server, {connectTimeout: 10000});
    const downlaodEvKey = 'download';

    io.on('connection', (socket) => {
        socket.on('send', async (url) => {
            if (!url) {
                socket.emit(downlaodEvKey, 'Invalid parameters.');
            } else {
                console.log(url);
                let stream = null;
                let writeStream = null;
                try {
                    const info = await ytdl.getInfo(url);
                    const title = info.player_response.videoDetails.title;
                    let fileName = title;
                    let destFilePath = path.resolve(__dirname, `./tmp/${fileName}.mp4`);
                    if (process.env.NODE_ENV === 'production') {
                        const S='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                        const N = 32;
                        fileName = Array.from(crypto.randomFillSync(new Uint8Array(N))).map((n)=>S[n%S.length]).join('');
                        destFilePath = `/usr/share/nginx/html/tmp-video/${fileName}.mp4`;
                    }

                    let options = {
                        filter: (format) => format.container === 'mp4',
                        quality: 'highest'
                    };
                    stream = ytdl(url, options);

                    stream.on('error', (err) => {
                        console.log(`Download failed: ${err.message}`);
                        socket.emit(downlaodEvKey, 'error');
                        if (writeStream) {
                            writeStream.end();
                        }
                        if (stream) {
                            stream.destroy();
                        }
                    });

                    writeStream = fs.createWriteStream(destFilePath);
                    stream.pipe(writeStream);

                    stream.on('progress', (chunkLength, downloaded, total) => {
                        const floatDownloaded = downloaded / total;
                        socket.emit('progress', floatDownloaded.toString());
                    });

                    stream.on('end', () => {
                        socket.emit('complete', `tmp-video/${fileName}.mp4`, `${title}.mp4`);
                        writeStream.end();
                        stream.destroy();
                    });

                } catch (error) {
                    console.log(error);
                    socket.emit(downlaodEvKey, 'error');
                    if (writeStream) {
                        writeStream.end();
                    }
                    if (stream) {
                        stream.destroy();
                    }
                }
            }
        });

        socket.on('disconnect', () => {});
    });
}

module.exports = {connectWs};
