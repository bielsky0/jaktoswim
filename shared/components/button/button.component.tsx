import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export type ButtonVariants = "link" | "button";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  href?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  onClick,
  href,
  variant = "button",
}: ButtonProps) => {
  const renderVariant = () => {
    switch (variant) {
      case "button":
        return (
          <button
            onClick={onClick}
            className="py-2 text-sm md:text-base lg:text-lg px-4 bg-[#229ED9] text-white font-semibold
     rounded-full shadow-md outline-none "
          >
            {children}
          </button>
        );

      case "link":
        return (
          <Link
            href={href || "/"}
            className="py-2 text-sm md:text-base lg:text-lg px-4 bg-[#229ED9] text-white font-semibold flex items-center
       rounded-full shadow-md outline-none "
          >
            {children}
          </Link>
        );
    }
  };
  return (
    <div className="flex cursor-pointer">
      {renderVariant()}
      <div className="bg-[#229ED9] rounded-full h-10 w-10 md:h-12 md:w-12 relative -translate-x-2">
        <FaArrowRight
          color="white"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45"
        />
      </div>
    </div>
  );
};
