import { cn } from "@/shared/utils";

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center flex-col max-w-[2560px] px-4 md:px-8 lg:px-24",
        className
      )}
    >
      {children}
    </div>
  );
};
