import rss from "@astrojs/rss";
import { type CollectionEntry, getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

interface SiteContext {
  site: string;
}

const parser = new MarkdownIt();

function getDateFromPost(grant: CollectionEntry<"grant">): Date {
  return new Date(`${grant.data.year || 2018}-${grant.data.month || 1}-${grant.data.day || 1}`)
}

export async function GET(context: SiteContext) {
  // HTML tags allowed in content
  const allowedTags = ["img", "p", "h1", "h2", "h3", "a", "ul", "ol", "li", "blockquote", "code", "pre", "strong"]

  // Get grants, order, and slice them
  let grants = await getCollection("grant");
  grants = grants.sort((a, b) => {
    return getDateFromPost(b).getTime() - getDateFromPost(a).getTime();
  }).slice(0, 20);

  // Return RSS feed
  return rss({
    title: "Unitary Foundation Grants",
    description: "Unitary Foundation is a non-profit working to create a quantum technology ecosystem that benefits the most people.",
    site: context.site,
    items: grants
      .map((grant) => ({
        title: grant.data.name,
        link: `/grants/${grant.slug}/`,
        pubDate: getDateFromPost(grant),
        categories: grant.data.tags || [],
        content: sanitizeHtml(parser.render(grant.body), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(allowedTags)
        }),
      })),
    customData: `<language>en-us</language>`,
  });
}
