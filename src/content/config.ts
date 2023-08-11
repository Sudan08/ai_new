// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const algoCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    index:z.number(),
    title: z.string(),
    description: z.string(),
    date : z.string(),
    src: z.string(),
    link : z.string(),
  }),
});  


const eventCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    index:z.number(),
    title: z.string(),
    description: z.string(),
    date : z.string(),
    src: z.string(),
    link : z.string(),
  }),
});


const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    githubURL : z.string().optional() || z.undefined(),
    linkedinURL : z.string().optional() || z.undefined(),
    year: z.number(),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'algo' : algoCollection,
  'team': teamCollection,
  'event': eventCollection,
};
