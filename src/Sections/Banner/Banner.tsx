import Button from '@/Components/Button/Button';

const Banner: React.FC = () => {
  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat bg-accent rounded-b-[4rem]"
      id="home"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="hidden lg:block absolute inset-0 radial-banner"></div>
        <div className="absolute top-4 left-4 arrowOne"></div>
      </div>
      <div className="mx-auto max-w-7xl pt-16 pb-6 lg:pt-20 sm:pb-24 px-8 relative">
        <div className="h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 my-16">
            <div className="relative lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-textPrimary text-center sm:text-left">
                Exclusive Deals of Furniture Collection
              </h1>
              <p className="text-textPrimary px-1 text-center sm:text-left text-lg font-normal mb-10">
                Explore different categories. Find the best deals.
              </p>
              <div className="flex items-center px-1 justify-center sm:justify-start">
                <Button label="Shop Now" aria-label="Shop Now"/>
              </div>
            </div>
            <div className="relative sm:hidden md:hidden lg:block lg:col-span-5 flex items-center justify-center lg:justify-end">
              <div className="absolute left-8 flex items-center justify-center w-32 h-32 bg-secondary text-textSecondary font-semibold text-md rounded-full">
                <span className="font-bold text-xl flex">UP To </span>
                <br />
                50% off
              </div>

              <img
                src="/images/banner/couch.svg"
                alt="Furniture"
                className="w-full h-auto max-w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
