export interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="py-2 text-sm md:text-base lg:text-lg px-4 bg-[#229ED9] text-white font-semibold
     rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {children}
    </button>
  );
};
