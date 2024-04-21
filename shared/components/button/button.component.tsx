import { FaArrowRight } from "react-icons/fa";

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <div className="flex">
      <button
        className="py-2 text-sm md:text-base lg:text-lg px-4 bg-[#229ED9] text-white font-semibold
     rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        {children}
      </button>

      <div className="bg-[#229ED9] rounded-full h-10 w-10 md:h-12 md:w-12 relative -translate-x-2">
        <FaArrowRight
          color="white"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45"
        />
      </div>
    </div>
  );
};
