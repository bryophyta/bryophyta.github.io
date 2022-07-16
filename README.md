# Personal site (WIP)

This branch used to hold the (built) source for my personal sites. I'm working
on a new way of building and maintaining the site, and plan to host the actual
source here, and host the built code in a separate github pages branch.

The new/current site is built with [Lume](https://lume.land/), a static site
generator for Deno.

## Notes/todos

- The css is a bit of a mess; partly due to migrating the styling from one of my
  old pages to the new site at the same time as adding things like
  syntax-highlighting. Better organisation (modules?) would be more easily
  maintainable...
- And there's still at least one genuine bug in the css, which sometimes results
  in delayed colour transitions on the initial page-load. (Hence the current
  workaround of only adding transition durations when the user actually requests
  a colour change.) (If anyone happens to be reading this and knows much about
  this -- maybe caused by embedded colour transitions, leading to delays in the
  children elements? -- please do let me know!)
- Need to audit the metadata etc...
- CI or at least some branch protections would be good.
- Breaking the templates into component files might be helpful if the site gets
  any more complicated.
