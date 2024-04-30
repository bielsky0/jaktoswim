import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "galleryImage",
  type: "document",
  title: "Image",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
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
