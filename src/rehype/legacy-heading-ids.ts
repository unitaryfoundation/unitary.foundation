import { rehypeHeadingIds, type RehypePlugin } from '@astrojs/markdown-remark';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

const rehypeLegacyHeadingIds: RehypePlugin = () => {
  const headingProcessor = unified().use(rehypeHeadingIds);

  return (tree, file) => {
    const generatedHeadings = new Set<object>();

    visit(tree, 'element', (node) => {
      if (/^h[0-6]$/.test(node.tagName) && typeof node.properties.id !== 'string') {
        generatedHeadings.add(node);
      }
    });

    headingProcessor.runSync(tree, file);

    // Astro 5 removed one trailing hyphen from generated heading IDs.
    visit(tree, 'element', (node) => {
      const id = node.properties.id;
      if (generatedHeadings.has(node) && typeof id === 'string' && id.endsWith('-')) {
        node.properties.id = id.slice(0, -1);
      }
    });
  };
};

export default rehypeLegacyHeadingIds;
