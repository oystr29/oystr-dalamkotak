import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/projects/projects.json", {
    parser: (text) => JSON.parse(text).projects,
  }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      name: z.string(),
      date: z.coerce.date(),
      img: image(),
      status: z.string().optional(),
      web: z.string().optional(),
      repo: z.string().optional(),
      categories: z
        .object({
          img: z.string().optional(),
          name: z.string(),
        })
        .array()
        .optional(),
      desc: z.string(),
    }),
});

export const collections = { projects };
