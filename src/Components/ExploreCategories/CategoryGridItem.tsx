import React, { useEffect, useState } from 'react';
import { getColor } from '../../api/colorUtils'; // Utility function to fetch dominant color from image

interface CategoryGridItemProps {
  title: string;
  image: any;
  active?: boolean;
}

const CategoryGridItem: React.FC<CategoryGridItemProps> = ({ title, image, active = false }) => {
  const [overlayColor, setOverlayColor] = useState<string>('rgba(0, 0, 0, 0.5)'); // Default overlay color with low opacity

  // Fetch dominant color from image when component mounts or image changes
  useEffect(() => {
    const fetchOverlayColor = async () => {
      try {
        const color = await getColor(image);
        setOverlayColor(`rgba(${color}, 0.5)`); // Apply low opacity to the fetched color
      } catch (error) {
        console.error('Failed to fetch color:', error);
        // Fallback to semi-transparent black
        setOverlayColor('rgba(0, 0, 0, 0.5)');
      }
    };

    fetchOverlayColor();
  }, [image]);

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-[250px] rounded-xl ${!active ? 'shadow-lg' : ''}`}>
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover rounded-xl"
      />

      {/* Color Overlay with Low Opacity */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundColor: overlayColor, // Dynamically set background color with transparency
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
        {active && (
          <button className="mt-7 px-8 py-2 bg-white text-[#4e7778] font-semibold rounded-lg">
            Explore
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryGridItem;
