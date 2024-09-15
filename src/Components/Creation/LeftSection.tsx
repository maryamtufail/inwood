interface LeftSectionProps {
  navigatePrev: () => void;
  navigateNext: () => void;
  progressWidth: number;
}

const LeftSection: React.FC<LeftSectionProps> = ({
  navigatePrev,
  navigateNext,
  progressWidth,
}) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 px-12 text-textSecondary bg-secondary rounded-r-lg space-y-4 py-24">
      <h1 className="text-3xl font-bold ">
        Our <br /> Own Creation
      </h1>
      <h2 className="text-md ">Designed in our studio</h2>
      <div className="flex flex-row justify-between items-center">
        <button className="py-2 mt-4 rounded-md">More</button>
        <div className=" w-full h-1 bg-primary mt-6 rounded-md mx-8">
          <div
            className="h-full bg-accent rounded-md"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <button
            onClick={navigatePrev}
            className="bg-blue-100 p-3 rounded-full text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={navigateNext}
            className="bg-red-100 p-3 rounded-full text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
