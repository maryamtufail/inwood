import { ChevronDownIcon } from '@heroicons/react/solid';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold">Description</h3>
      <p className="mt-2">{description}</p>
      <a className="mt-4 font-semibold flex items-center" href="#">
        See More
        <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
      </a>
    </div>
  );
};

export default Description;
