import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchemaPart = {
  text: z.string(),
  link: z.string(),
};

/**
 * Navigation
 */

export const navigationSchema = z.object({
  items: z.array(
    z.object({
      ...linkSchemaPart,
      children: z.array(z.object(linkSchemaPart)).optional(),
    })
  ),
});

const navigationCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/navigation' }),
  schema: navigationSchema,
});

/**
 * Blog (aka posts)
 */

const tags = z
  .array(z.string())
  .optional()
  .transform((val) => val?.map((tag) => tag.toLowerCase()));

export const blogSchema = z.object({
  title: z.string(),
  author: z.string().optional(),
  day: z.number().optional(),
  month: z.number(),
  year: z.number(),
  tags,
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: blogSchema,
});

/**
 * Grants
 */

export const grantSchema = z.object({
  name: z.string(),
  day: z.number().optional(),
  month: z.number().optional(),
  year: z.number(),
  country: z.string().optional(),
  tags,
});

const grantCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/grant' }),
  schema: grantSchema,
});

/**
 * Events
 */

export const eventSchema = z.object({
  title: z.string(),
  day: z.number(),
  month: z.number(),
  year: z.number(),
  time: z.string(),
  speaker: z.string(),
  image: z.string().optional(),
});

const eventCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/event' }),
  schema: eventSchema,
});

/**
 * Jobs
 */

export const jobSchema = z.object({
  title: z.string(),
});

const jobCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/job' }),
  schema: jobSchema,
});

/**
 * Supporters
 */

export const supporterSchema = z.object({
  supporters: z.array(
    z.object({
      title: z.string(),
      url: z.url().optional(),
      imageId: z.string().optional(),
    })
  ),
});

const supporterCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/supporter' }),
  schema: supporterSchema,
});

/**
 * Advisors
 */

export const advisorSchema = z.object({
  advisors: z.array(
    z.object({
      title: z.string(),
      url: z.url().optional(),
    })
  ),
});

const advisorCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/advisor' }),
  schema: advisorSchema,
});

/**
 * Team
 */

export const teamSchema = z.object({
  team: z.array(
    z.object({
      title: z.string(),
      url: z.url().optional(),
    })
  ),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/team' }),
  schema: teamSchema,
});

/**
 * Directors
 */

export const directorSchema = z.object({
  directors: z.array(
    z.object({
      title: z.string(),
      url: z.url().optional(),
    })
  ),
});

const directorCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/director' }),
  schema: directorSchema,
});

export const collections = {
  navigation: navigationCollection,
  blog: blogCollection,
  grant: grantCollection,
  event: eventCollection,
  job: jobCollection,
  supporter: supporterCollection,
  advisor: advisorCollection,
  team: teamCollection,
  director: directorCollection
};
