const Button: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="mt-3 text-xl font-semibold text-[#ffffff] py-4 px-6 lg:px-12 bg-[#70908b] hover:text-[#07484a] hover:bg-transparent border-2 border-[#70908b] rounded">
      {label}
    </button>
  );
};

export default Button;
