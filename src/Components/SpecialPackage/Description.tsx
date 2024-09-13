import { ChevronDownIcon } from '@heroicons/react/solid';

const Description = () => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold">Description</h3>
      <p className="mt-2">
        Cast Aluminum Outdoor Chaise Lounge. An elegant and classic touch to
        your outdoor space, combining function and quality for the best
        experience.
      </p>
      <a className="mt-4 font-semibold flex items-center" href="#">
        See More
        <ChevronDownIcon className="h-5 w-5 ml-1 inline-block " />
      </a>
    </div>
  );
};

export default Description;
