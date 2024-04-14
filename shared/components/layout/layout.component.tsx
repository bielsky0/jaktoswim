import { cn } from "@/shared/utils";

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn("flex w-full items-center flex-col", className)}>
      <div className="px-4 md:px-8 lg:px-24 w-full">{children}</div>
    </div>
  );
};
