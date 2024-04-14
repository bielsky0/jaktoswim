import Image from "next/image";

import logoSrc from "@/public/logo.svg";
import logoWhiteSrc from "@/public/logoWhite.svg";

import { cn } from "@/shared/utils";

export type LogoVariant = "black" | "white";

export interface LogoProps {
  className?: string;
  variant?: LogoVariant;
}

export const Logo = ({ className, variant = "black" }: LogoProps) => {
  const getLogoSrc = () => {
    switch (variant) {
      case "black":
        return logoSrc;

      case "white":
        return logoWhiteSrc;
    }
  };
  return (
    <Image
      className={cn(className, "fill-red-300")}
      src={getLogoSrc()}
      alt="Simply Amazing Logo"
    />
  );
};
