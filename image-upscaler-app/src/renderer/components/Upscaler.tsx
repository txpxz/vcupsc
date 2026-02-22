import React, { useState } from 'react';
import { upscaleImage } from '../../services/upscaler';
import { ImageList } from './ImageList';

const Upscaler: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [upscaledImages, setUpscaledImages] = useState<string[]>([]);
    const [upscaleFactor, setUpscaleFactor] = useState<number>(2);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedImage(files[0]);
        }
    };

    const handleUpscale = async () => {
        if (selectedImage) {
            const upscaledImage = await upscaleImage(selectedImage, upscaleFactor);
            setUpscaledImages([...upscaledImages, upscaledImage]);
        }
    };

    return (
        <div className="upscaler">
            <h2>Image Upscaler</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <div>
                <label>
                    Upscale Factor:
                    <select value={upscaleFactor} onChange={(e) => setUpscaleFactor(Number(e.target.value))}>
                        <option value={2}>2x</option>
                        <option value={4}>4x</option>
                    </select>
                </label>
            </div>
            <button onClick={handleUpscale}>Upscale Image</button>
            <ImageList images={upscaledImages} />
        </div>
    );
};

export default Upscaler;