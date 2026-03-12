import { defineCollection, z } from 'astro:content';

const servicios = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    description: z.string(),
    video_url: z.string().optional(),
    pdf: z.string().optional(),
  }),
});

const categorias = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { servicios, categorias };