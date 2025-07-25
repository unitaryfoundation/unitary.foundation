import rss from '@astrojs/rss';
import { z, getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context: { site: any; }) {
  const posts = await getCollection("blog");
  const grants = await getCollection("grant");

  const RSSSchema = z.object({
    title: z.string(),
    link: z.string(),
    author: z.string().optional(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    content: z.string().optional()
  });

  type RSSItem = z.infer<typeof RSSSchema>
  const combined_items: RSSItem[] = []

  posts.map(post => combined_items.push({
    title: post.data.title,
    link: `/posts/${post.slug}/`,
    author: post.data.author,
    pubDate: new Date(`${post.data.year || 2018}-${post.data.month || 1}-${post.data.day || 1}`),
    tags: post.data.tags || [],
    content: sanitizeHtml(parser.render(post.body), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "p", "h1", "h2", "h3", "a", "ul", "ol", "li", "blockquote", "code", "pre", "strong"])
    }),
  }))

  grants.map(grant => combined_items.push({
    title: grant.data.name,
    link: "/grants/",
    pubDate: new Date(`${grant.data.year || 2018}-${grant.data.month || 1}-${grant.data.day || 1}`),
    tags: grant.data.tags || [],
    content: sanitizeHtml(parser.render(grant.body), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "p", "h1", "h2", "h3", "a", "ul", "ol", "li", "blockquote", "code", "pre", "strong"])
    }),
  }))

  combined_items.sort((a, b) => {
    return b.pubDate.getTime() - a.pubDate.getTime()
  })



  return rss({
    title: "Unitary Foundation Blog",
    description: "Unitary Foundation is a non-profit working to create a quantum technology ecosystem that benefits the most people.",
    site: context.site,

    items: combined_items.slice(0, 20).map((item: RSSItem) => ({
      title: item.title,
      pubDate: item.pubDate,
      author: item.author,
      categories: item.tags || [],
      link: item.link,
      content: item.content,
    })),
  });

}