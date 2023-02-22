# Personal site

Source code for my personal site. The site is built with [Lume](https://lume.land/), a static site
generator for Deno, and currently hosted on Github Pages.

## Notes/todos

- The css is a bit of a mess; partly due to migrating the styling from one of my
  old pages to the new site at the same time as adding new things like
  syntax-highlighting for code snippets.
- And there's still at least one genuine bug in the css, which sometimes results
  in delayed colour transitions on the initial page-load. Hence the current
  workaround of only adding transition durations when the user actually requests
  a colour change. (If anyone happens to be reading this and knows much about
  this -- maybe caused by embedded colour transitions, leading to delays in the
  children elements? -- please do let me know!)
- Need to audit the metadata etc...
