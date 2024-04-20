"use client";

import { Button, Review, Slider } from "@/shared/components";
import { FEATURED_REVIEWS } from "@/shared/utils";

export const FeaturedReviews = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row gap-8">
      <div className="flex flex-col ">
        <div className="flex gap-2 items-center pb-2">
          <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
          <h5 className="text-sm md:text-base">Recenzje</h5>
        </div>

        <div className="max-w-xl pb-3">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Ludzie nas kochają, a my kochamy ich
          </h2>
        </div>

        <div>
          <Button>Zobacz Wszystkie Recenzje</Button>
        </div>
      </div>

      <div className="overflow-hidden relative w-full | lg:w-12/16">
        <Slider
          items={FEATURED_REVIEWS}
          renderItem={({ content, name }) => (
            <Review name={name} content={content} />
          )}
          keyExtractor={({ id }) => id}
        />
      </div>
    </div>
  );
};
