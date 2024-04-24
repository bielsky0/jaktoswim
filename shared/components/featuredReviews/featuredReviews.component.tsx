"use client";

import { Button, Review, Slider } from "@/shared/components";
import { ReviewsSection } from "@/shared/libs/strapiClient/strapiClient.types";

export interface FeaturedReviewsProps {
  reviews: ReviewsSection;
}

export const FeaturedReviews = ({ reviews }: FeaturedReviewsProps) => {
  const { reviews: featuredReviews, title, subtitle, button_cta } = reviews;
  return (
    <div className="flex w-full flex-col lg:flex-row gap-8">
      <div className="flex flex-col ">
        <div className="flex gap-2 items-center pb-2">
          <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
          <h5 className="text-sm md:text-base">{subtitle}</h5>
        </div>

        <div className="max-w-xl pb-3">
          <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
            {title}
          </h2>
        </div>

        <div>
          <Button>{button_cta}</Button>
        </div>
      </div>

      <div className="overflow-hidden relative w-full | lg:w-12/16">
        <Slider
          items={featuredReviews.data}
          renderItem={(review) => (
            <Review
              name={review.attributes.reviews.name}
              content={review.attributes.reviews.review}
            />
          )}
          keyExtractor={({ id }) => id.toString()}
        />
      </div>
    </div>
  );
};
