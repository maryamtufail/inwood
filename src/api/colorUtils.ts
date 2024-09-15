export const getColor = (sectionId: number): string => {
  const colors = [
    '#CAF3E5', // Light teal
    '#E0EFF6', // Light blue
    '#EEE8FF', // Light lavender
    '#FFF4E7', // Light peach
  ];


  const index = sectionId % colors.length;

  return colors[index];
};
