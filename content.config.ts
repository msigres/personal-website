import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        image: z.string().optional(),
        author: z.string().optional(),
        date: z.date(),
        link: z.string().optional(),
        tags: z.array(z.string()),
        category: z.string().optional(),
        featured: z.boolean()
      })
    })
  }
})
