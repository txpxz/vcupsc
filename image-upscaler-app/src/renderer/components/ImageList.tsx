import React from 'react';

interface ImageItem {
    original: string;
    upscaled: string;
}

interface ImageListProps {
    images: ImageItem[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
    return (
        <div className="image-list">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <h3>Original Image</h3>
                    <img src={image.original} alt={`Original ${index}`} />
                    <h3>Upscaled Image</h3>
                    <img src={image.upscaled} alt={`Upscaled ${index}`} />
                </div>
            ))}
        </div>
    );
};

export default ImageList;