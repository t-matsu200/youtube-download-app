'use strict';
import fs from 'fs';


export class FileUtil {

    public static async isExists(targetPath: string): Promise<boolean> {
        return fs.promises.access(targetPath, fs.constants.F_OK)
        .then(() => true)
        .catch(() => false);
    }

    public static async delete(targetPath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.isExists(targetPath)
            .then((result) => {
                if (!result) {
                    return Promise.resolve();
                }
                fs.unlink(targetPath, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            })
            .catch(e => Promise.reject(e));
        });
    }
}
