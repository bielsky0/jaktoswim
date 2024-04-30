import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({ title: "Slug", name: "slug", type: "slug" }),
    defineField({ title: "Description", name: "description", type: "text" }),
    defineField({ title: "Keywords", name: "keywords", type: "string" }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
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
