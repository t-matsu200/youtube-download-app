import { useRouter } from 'next/router';
import {useState, useEffect, useRef} from 'react';
import {io, Socket} from 'socket.io-client';

const downloadService = (initialNum: number) => {
    const router = useRouter();
    const [downloaded, setDownloaded] = useState(initialNum);
    const socketRef = useRef<Socket>();

    useEffect(() => {
        socketRef.current = io({
            'timeout': 10000,
            'reconnection': true,
            'reconnectionDelay': 10000,
            'reconnectionDelayMax' : 50000,
            'reconnectionAttempts': 10
        }).connect();

        socketRef.current.on('error', () => {
            alert('The server has been disconnected. Please reload.');
        });

        socketRef.current.on('download', (payload: string) => {
            if (payload === 'Invalid parameters.') {
                alert(payload);
            } else if ('error') {
                alert('Unable to extract video information from this URL. The video may be private, unavailable on the server, or the site may not be supported.');
            }
        });

        socketRef.current.on('complete', (filePath: string, title: string) => {
            const link = document.createElement('a');
            link.href = filePath;
            link.setAttribute('download', title);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            router.push('/complete');
        });

        socketRef.current.on('progress', (payload: string) => {
            setDownloaded(parseFloat(payload));
        });

        socketRef.current.on('close', () => {});
    
        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendText = (msg: string) => {
        socketRef.current.emit('send', msg);
    }

    return {
        'downloaded': downloaded, 'sendText': sendText
    };
}

export default downloadService;
