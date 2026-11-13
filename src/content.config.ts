import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cookbook = defineCollection({
	// Load Markdown and MDX files in the `src/content/cookbook/` directory.
	loader: glob({ base: './src/content/cookbook', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			credit: z.string().optional(),
			sourceLink: z.string().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { cookbook };
