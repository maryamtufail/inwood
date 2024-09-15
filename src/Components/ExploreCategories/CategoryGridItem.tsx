import Button from '../Button/Button';

interface CategoryGridItemProps {
  title: string;
  image: string;
  active?: boolean;
}

const CategoryGridItem: React.FC<CategoryGridItemProps> = ({
  title,
  image,
  active = false,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-[250px] rounded-xl ${!active ? 'shadow-lg' : ''}`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-[250px] object-cover rounded-xl"
      />

      <div
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-3xl font-semibold text-textSecondary">{title}</h3>
        {active && <Button  label="Explore" aria-label="Explore" />}
      </div>
    </div>
  );
};

export default CategoryGridItem;
