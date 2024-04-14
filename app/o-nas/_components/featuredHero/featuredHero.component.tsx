import { Button } from "@/shared/components";

export const FeaturedHero = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          <span>
            Nasz Instruktor,
            <br />
          </span>
          <span>
            Mistrz Wody!
            <br />
          </span>
        </h1>
      </div>

      <div className="flex w-full justify-center pt-8 gap-8">
        <div className="rounded-2xl w-[200px] bg-gray-300 h-[250px]"></div>

        <div className="rounded-2xl w-[200px] bg-gray-300 h-[250px]"></div>

        <div className="rounded-2xl w-[200px] bg-gray-300 h-[250px]"></div>

        <div className="rounded-2xl w-[200px] bg-gray-300 h-[250px]"></div>

        <div className="rounded-2xl w-[200px] bg-gray-300 h-[250px]"></div>
      </div>

      <div className="pt-8">
        <Button>Dowiedz Się Więcej</Button>
      </div>
    </div>
  );
};
