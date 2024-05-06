"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/shared/utils";
import { Button } from "../button";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
}

export const TransitionLink = ({ href, children }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
};
