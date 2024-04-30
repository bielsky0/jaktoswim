import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ title: "Title", name: "title", type: "string" }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "heroSection",
        }),
        defineArrayMember({
          name: "billboard",
          type: "billboardSection",
        }),
        defineArrayMember({
          name: "videoHero",
          type: "videoHeroSection",
        }),
        defineArrayMember({
          name: "imageHero",
          type: "imageHeroSection",
        }),
        defineArrayMember({
          name: "services",
          type: "servicesSection",
        }),
        defineArrayMember({
          name: "contact",
          type: "contactSection",
        }),
        defineArrayMember({
          name: "imageCarousel",
          type: "imageCarouselSection",
        }),
        defineArrayMember({
          name: "faqs",
          type: "faqsSection",
        }),
        defineArrayMember({
          name: "featuredReviews",
          type: "featuredReviewsSection",
        }),
        defineArrayMember({
          name: "featuredBlogs",
          type: "featuredBlogsSection",
        }),
        defineArrayMember({
          name: "marquee",
          type: "marqueeSection",
        }),
      ],
    }),
  ],
});
