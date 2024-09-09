const Banner: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat bg-[#c4c4c4] rounded-b-[4rem]"
      id="home-section"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="hidden lg:block absolute inset-0 radial-banner"></div>
        <div className="absolute top-4 left-4 arrowOne"></div>
      </div>

      <div className="mx-auto max-w-7xl pt-16 pb-6  lg:pt-40 sm:pb-24 px-8 relative">
        <div className="h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 my-16">
            <div className="relative lg:col-span-7">
              <h1 className="text-4xl  lg:text-6xl font-bold mb-5 text-[#07484a] text-center sm:text-left">
                Exclusive Deals of Furniture Collection
              </h1>
              <p className="text-[#07484a] px-1 text-center sm:text-left text-lg font-normal mb-10">
                Explore different categories. Find the best deals.
              </p>
              <div className="flex items-center px-1 justify-center sm:justify-start">
                <button className="text-xl font-semibold text-[#ffffff] py-4 px-6 lg:px-12 bg-[#70908b] hover:text-[#07484a] hover:bg-transparent border-2 border-[#70908b]  rounded mr-6">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
