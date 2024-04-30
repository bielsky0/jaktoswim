import { defineField, defineType } from "sanity";

export const billboardType = defineType({
  name: "billboardSection",
  type: "object",
  title: "Billboard",
  fields: [
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),
    defineField({
      title: "Showreel",
      name: "showreel",
      type: "file",
    }),
    defineField({
      title: "Second Showreel",
      name: "second_showreel",
      type: "file",
    }),
  ],
});

export const videoHeroSection = defineType({
  name: "videoHeroSection",
  type: "object",
  title: "Video Hero Section",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),
    defineField({ title: "Description", name: "description", type: "text" }),
    defineField({
      title: "Cover Video",
      name: "coverVideo",
      type: "file",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
  ],
});

export const imageHeroSection = defineType({
  name: "imageHeroSection",
  type: "object",
  title: "Image Hero Section",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),
    defineField({ title: "Description", name: "description", type: "text" }),
    defineField({
      title: "Cover Image",
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});

export const heroSection = defineType({
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),
    defineField({ title: "Description", name: "description", type: "text" }),
  ],
});

export const servicesSection = defineType({
  name: "servicesSection",
  type: "object",
  title: "Services Section",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),
    defineField({ title: "Description", name: "description", type: "text" }),
    defineField({
      title: "Cover Video",
      name: "coverVideo",
      type: "file",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      title: "Services",
      name: "services",
      type: "array",
      of: [
        defineField({
          name: "service",
          type: "object",
          fields: [
            defineField({
              title: "Title",
              name: "title",
              type: "string",
            }),
            defineField({
              title: "Description",
              name: "description",
              type: "text",
            }),
            defineField({
              title: "Cover Image",
              name: "coverIamge",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

export const contactSection = defineType({
  name: "contactSection",
  type: "object",
  title: "Contact Section",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Cover Image",
      name: "coverIamge",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),

    defineField({
      name: "contact",
      type: "object",
      title: "Contact",
      fields: [
        defineField({
          title: "Title",
          name: "title",
          type: "string",
        }),
        defineField({
          title: "Description",
          name: "description",
          type: "text",
        }),
        defineField({
          title: "Phone Number",
          name: "phoneNumber",
          type: "string",
        }),
      ],
    }),
  ],
});

export const imageCarouselSection = defineType({
  name: "imageCarouselSection",
  type: "object",
  title: "Image Carousel Section",
  fields: [
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),

    defineField({
      title: "Images",
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
    }),
  ],
});

export const faqsSection = defineType({
  name: "faqsSection",
  type: "object",
  title: "FAQs Section",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),
    defineField({
      title: "FAQs",
      name: "faqs",
      type: "array",
      of: [
        defineField({
          name: "FAQ",
          type: "object",
          fields: [
            defineField({
              title: "Question",
              name: "question",
              type: "string",
            }),
            defineField({
              title: "Answer",
              name: "answer",
              type: "text",
            }),
          ],
        }),
      ],
    }),
  ],
});

export const reviewsSection = defineType({
  title: "Featured Reviews Sections",
  type: "object",
  name: "featuredReviewsSection",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),
    defineField({
      title: "Featured Reviews",
      type: "array",
      name: "featuredReviews",
      of: [
        defineField({
          name: "featuredReviews",
          title: "Featured Reviews",
          type: "reference",
          to: [{ type: "review" }],
        }),
      ],
    }),
  ],
});

export const blogsSection = defineType({
  title: "Featured Blogs Sections",
  type: "object",
  name: "featuredBlogsSection",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Button CTA",
      name: "button_cta",
      type: "string",
    }),
    defineField({
      title: "Featured Blogs",
      type: "array",
      name: "featuredBlogs",
      of: [
        defineField({
          name: "featuredBlog",
          title: "Featured Blog",
          type: "reference",
          to: [{ type: "blog" }],
        }),
      ],
    }),
  ],
});

export const marqueeSection = defineType({
  title: "Marquee Sections",
  type: "object",
  name: "marqueeSection",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "string",
    }),
  ],
});
