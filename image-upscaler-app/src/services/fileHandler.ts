import fs from 'fs';
import path from 'path';

const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];

export const isSupportedFormat = (fileName: string): boolean => {
    const ext = path.extname(fileName).toLowerCase();
    return supportedFormats.includes(ext);
};

export const readFile = (filePath: string): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

export const writeFile = (filePath: string, data: Buffer): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

export const getFileNameWithoutExtension = (filePath: string): string => {
    return path.basename(filePath, path.extname(filePath));
};