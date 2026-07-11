import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    role: z.string().optional(),
    category: z.enum([
      'featured',
      'commercial',
      'film',
      'real-people',
      'culinary',
      'live-commerce',
      'studio-bts',
    ]),
    shortDescription: z.string(),
    vimeoUrl: z.string().optional(),
    thumbnail: z.string(),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    showcase: z.boolean().default(false),
    showcaseOrder: z.number().default(999),
    videoComingSoon: z.boolean().default(false),
  }),
});

const studios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/studios' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    thumbnail: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    useCases: z.array(z.object({ image: z.string(), label: z.string() })).default([]),
    bookUrl: z.string().optional(),
    order: z.number().default(0),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    topic: z.enum(['personal', 'studio-systems', 'production-operations', 'practical-ai']),
    image: z.string().optional(),
  }),
});

export const collections = { work, studios, insights };
