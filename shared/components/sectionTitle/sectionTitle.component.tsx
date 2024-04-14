export interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
        <h5>{subtitle}</h5>
      </div>

      <div className="max-w-xs">
        <h2 className="text-4xl">{title}</h2>
      </div>
    </div>
  );
};
