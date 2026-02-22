export interface Image {
    id: string;
    src: string;
    upscaledSrc?: string;
    format: 'jpg' | 'jpeg' | 'png' | 'gif' | 'bmp' | 'tiff';
}

export interface Settings {
    upscaleFactor: 2 | 4;
    language: 'en' | 'ru';
}

export interface AppState {
    images: Image[];
    settings: Settings;
}