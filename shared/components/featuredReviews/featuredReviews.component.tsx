import { Button, Review } from "@/shared/components";

export const FeaturedReviews = () => {
  return (
    <div className="flex gap-16 lg:gap-4 lg:flex-row flex-col">
      <div className="w-full max-w-2xl w-fit">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5>Recenzje</h5>
          </div>

          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              Ludzie nas kochają, a my kochamy ich
            </h2>
          </div>

          <div className="pt-4">
            <Button>Zobacz Wszystkie Recenzje</Button>
          </div>
        </div>
      </div>

      <div>
        <Review />
      </div>
    </div>
  );
};
