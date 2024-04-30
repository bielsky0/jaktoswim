import { defineField, defineType } from "sanity";

export const reviewType = defineType({
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    defineField({
      title: "Content",
      name: "content",
      type: "text",
    }),
    defineField({ title: "Author", name: "author", type: "string" }),
  ],
});
