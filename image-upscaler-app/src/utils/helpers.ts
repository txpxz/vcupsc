export const isImageFile = (fileName: string): boolean => {
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'];
    const extension = fileName.split('.').pop()?.toLowerCase();
    return extension ? validExtensions.includes(extension) : false;
};

export const upscaleFactorOptions = [2, 4];

export const getLanguageOptions = () => {
    return {
        en: 'English',
        ru: 'Русский'
    };
};

export const validateImageSize = (file: File): boolean => {
    const maxSizeInMB = 5; // Example limit
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSizeInBytes;
};