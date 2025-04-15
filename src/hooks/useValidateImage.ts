import { useState, useEffect } from 'react';

interface ValidateImageProps {
    initialPath: string;
}

const useValidateImage = ({ initialPath }: ValidateImageProps) => {
    const [imagePath, setImagePath] = useState(initialPath);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        if (imagePath) {
            const img = new Image();
            img.src = imagePath;
            img.onload = () => setImageError(false);
            img.onerror = () => setImageError(true);
        }
    }, [imagePath]);

    return { imagePath, setImagePath, imageError };
};

export default useValidateImage;