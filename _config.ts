import anchor from "https://ga.jspm.io/npm:markdown-it-anchor@8.6.4/dist/markdownItAnchor.mjs";
import footnote from "https://ga.jspm.io/npm:markdown-it-footnote@3.0.3/index.js";
import toc from "https://ga.jspm.io/npm:markdown-it-toc-done-right@4.2.0/dist/markdownItTocDoneRight.js";
import { Element } from "https://deno.land/x/deno_dom/src/dom/element.ts";
import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import prism from "lume/plugins/prism.ts";
import inline from "lume/plugins/inline.ts";
import parcelCss, { version } from "lume/plugins/parcel_css.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";

const tocWithOptions = [toc, { level: 2 }];

const markdown = {
  plugins: [anchor, footnote, tocWithOptions],
  keepDefaultPlugins: true,
};

const site = lume({}, { markdown });

site.ignore("README.md");

site.use(attributes()).use(inline()).use(
  prism({ languages: ["md", "shell", "js", "py"] }),
).use(resolveUrls());

site.use(parcelCss({
  extensions: [".css"],
  sourceMap: false,
  options: {
    minify: true,
    targets: {
      android: version(98),
      chrome: version(98),
      edge: version(98),
      firefox: version(97),
      ios_saf: version(15),
      safari: version(15),
      opera: version(83),
      samsung: version(16),
    },
  },
}));

// don't process, just copy to _site/
// site.copy("assets/images");

// add attributes to all links marked with 'ext'
site.process([".html"], (page) => {
  // add appropriate attributes to external links
  page.document?.querySelectorAll("a[ext]").forEach((link) => {
    const linkEl = link as unknown as Element;
    if (!linkEl.hasAttribute("target")) {
      linkEl.setAttribute("target", "_blank");
    }
    linkEl.setAttribute("rel", "noopener noreferrer");
    linkEl.removeAttribute("ext");
  });
  // todo: work out to actually patch the markdown plugin, instead.
  page.document?.querySelectorAll(".footnote-backref").forEach((link) => {
    const linkEl = link as unknown as Element;
    linkEl.innerHTML = "[back to text]";
  });
});

export default site;
