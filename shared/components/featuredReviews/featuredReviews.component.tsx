"use client";

import { Button, Review, Slider } from "@/shared/components";
import { ReviewsSection } from "@/shared/libs/sanity/types";

export interface FeaturedReviewsProps {
  reviews: ReviewsSection;
}

export const FeaturedReviews = ({ reviews }: FeaturedReviewsProps) => {
  const { featuredReviews, title, subtitle, button_cta } = reviews;
  return (
    <div className="flex w-full flex-col lg:flex-row gap-4">
      <div className="flex flex-col ">
        <div className="flex gap-2 items-center pb-2">
          <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
          <span className="text-sm md:text-base">{subtitle}</span>
        </div>

        <div className="max-w-xl pb-3">
          <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
            {title}
          </h2>
        </div>

        <div>
          <Button href="https://www.facebook.com/JaktoSwim/reviews">
            {button_cta}
          </Button>
        </div>
      </div>

      <div className="overflow-hidden relative w-full | lg:w-12/16">
        <Slider
          items={featuredReviews}
          renderItem={(review) => (
            <Review name={review.author} content={review.content} />
          )}
          keyExtractor={({ author }) => author}
        />
      </div>
    </div>
  );
};
