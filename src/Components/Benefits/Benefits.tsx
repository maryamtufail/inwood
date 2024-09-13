export interface BenefitData {
  imgSrc: string;
  heading: string;
  subheadingLine1: string;
  subheadingLine2: string;
  bgColor: string;
}

const benefitData: BenefitData[] = [
  {
    imgSrc: '/images/benefits/payment.svg',
    heading: 'Payment Method',
    subheadingLine1: 'We offer flexible payment',
    subheadingLine2: 'options to make it easier.',
    bgColor: '#EEEBFF',
  },
  {
    imgSrc: '/images/benefits/support.svg',
    heading: 'Return Policy',
    subheadingLine1: 'You can return a product',
    subheadingLine2: 'within 30 days.',
    bgColor: '#FFF4E7',
  },
  {
    imgSrc: '/images/benefits/return.svg',
    heading: 'Customer Support',
    subheadingLine1: 'Our customer support',
    subheadingLine2: 'is 24/7.',
    bgColor: '#CAF3E5',
  },
];
const Benefit: React.FC = () => {
  return (
    <div id="about" className="pt-16 px-4 md:px-6 lg:px-8 pb-20 text-[#07484A] bg-[#E0EFF6] ">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-24">
          Benefits for Your Convenience
        </h3>
      </div>

      <div className="flex md:flex-row flex-col gap-28 justify-center items-center">
        {benefitData.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center items-center">
              <img
                src={item.imgSrc}
                alt={item.heading}
                width={80}
                height={80}
                className="rounded-xl p-4"
                style={{ backgroundColor: item.bgColor }}
              />
            </div>

            <h3 className="text-2xl font-semibold mt-4">
              {item.heading}
            </h3>
            <p className="text-base text-bluish mt-4">
              {item.subheadingLine1} <br /> {item.subheadingLine2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
