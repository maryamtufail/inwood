// src/utils/colorUtils.ts
export const getColor = (sectionId: number): string => {
    const colors = [
      '#CAF3E5', // Light teal
      '#E0EFF6', // Light blue
      '#EEE8FF', // Light lavender
      '#FFF4E7', // Light peach
    ];
  
    // Ensure the sectionId is within bounds
    const index = sectionId % colors.length;
    
    return colors[index];
  };
  