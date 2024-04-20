"use client";

import { Button, Review } from "@/shared/components";
import { FEATURED_REVIEWS } from "@/shared/utils";
import Slider from "react-slick";

export const FeaturedReviews = () => {
  return (
    <div className="flex w-full gap-8  lg:gap-32 lg:flex-row flex-col max-w-[100%]  m-auto">
      <div className="w-full max-w-2xl w-fit">
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
      </div>
      <div className="flex w-full items-center justify-end ">
        <div className="max-w-full lg:max-w-md ">
          <Slider arrows={false} autoplay infinite speed={500}>
            {FEATURED_REVIEWS.map(({ name, content }) => (
              <Review
                key={`${name}_${Date.now()}`}
                name={name}
                content={content}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
