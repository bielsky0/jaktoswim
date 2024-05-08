export interface ReviewProps {
  name: string;
  content: string;
}

export const Review = ({ name, content }: ReviewProps) => {
  return (
    <div className="h-auto flex w-[300px] lg:w-[400px]">
      <div className="w-full w- flex flex-col p-6 bg-[#F4F4F4] rounded-2xl">
        <div>
          <p className="text-sm">{content}</p>
        </div>

        <div className="flex items-center pt-4 gap-4">
          <div className="bg-[#229ED9] py-2 px-4 rounded-lg">
            <span className="text-white font-bold text-xl">
              {name[0].toUpperCase()}
            </span>
          </div>

          <div>
            <span className="font-semibold">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
