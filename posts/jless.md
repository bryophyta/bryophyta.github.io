---
title: Using jless to explore complex json files
---

# Using jless to explore complex json files (Draft)

I stumbled across [jless](https://jless.io/){ext} a while ago, and I've used it
for a few months for viewing json files in the terminal.[^yaml] I always found
it helpful, but more recently I've encountered use-cases where it's really come
into its own. Thinking through why I found it helpful in these cases also led me
to realise some more general things about exploring large json structures, which
I will try to sketch here.

There are plenty of effective ways to explore data structures, and no single
approach is going to suit everyone. I wanted to share an approach that I've
found valuable, but I'd love to hear how other people have solved similar
problems!

## The challenges

It's worth mentioning the kind of task I have in mind, namely: _exploratory
analysis of large, complex json files_.

A good example is the json object which describes the structure and content of a
'front page' on The Guardian newspaper's website, such as the homepage for the
UK edition ([theguardian.com/uk](https://www.theguardian.com/uk){ext}).[^capi]

The majority of the information needed to render one of the pages is contained
within a single json file which can be used to generate front pages via a range
of different rendering methods.

If this file is formatted using `prettier`, it typically comes out to around
140,000 lines. At the top level it has 8 distinct keys. In total, there are
around 230 unique keys in the structure, and some of the leaf nodes are nested
20 layers deep.[^leaves]

<aside>
  <details>
  <summary>
    Counting depth and number of unique keys
  </summary>

These scripts count the depth of the tree, and the number of unique keys, in the
json which serves the current Guardian UK homepage. (Nb. running them requires
having [jq](https://stedolan.github.io/jq/) installed.)

```shell
# Counts the number of unique keys.
# Adapted from https://stackoverflow.com/a/37168763
curl -s "https://www.theguardian.com/uk.json?dcr" \
  | jq '[.. | objects | keys[]] | unique' \
  | wc -l

# Returns the maximum 'depth' of leaf nodes
# Adapted from Fabian Keller's script for extracting paths using jq:
#  https://www.fabian-keller.de/blog/5-useful-jq-commands-parse-json-cli/
curl -s "https://www.theguardian.com/uk.json?dcr" \
  | jq 'select(objects)|=[.] | map(paths(scalars)) | map(length) | max'
```

  </details>
</aside>

There are certainly larger json files out there, but at this size the Fronts
json already presents a couple of challenges:

1. **_Speed._** The file in question isn't that big in itself -- a few megabytes
   of plain text. But if you're going to explore json then you'll want it to be
   pretty printed in some way or another. I've found that many solutions get
   quite sluggish when they try to parse a json object of this size and
   structure.
2. **_Enabling the simultaneous discovery of content and structure._** json is a
   fairly simple format insofar as there are only a few basic data types which
   make it up: objects, arrays, numbers, strings, booleans, and `null`. But json
   objects can end up being very deeply nested, and because most uses of json
   address values via a path from the root, dealing effectively with the content
   often requires a decent grasp of the structure of the whole object (or at
   minimum the whole branch leading to the values of interest).

## Speed

To be honest I don't have too much to say about the issue of speed. I think that
it's important for the interface not to lag so far behind your window of
attention that you end up losing track of where you are. And I'm sure that there
are plenty of tools which will clear that bar. I'll just say that I've had
trouble with the speed of other tools before, but for the data structures I've
needed to explore, jless has more than cleared my bar for speed. If you've had
trouble with other tools, it might be worth trying out.

## Exploring complex json

I'll try to say a bit more about how I understand the cognitive challenges of
understanding a complex json object.

Take a line from the current Guardian UK homepage:

> Spooky shipwrecks and singing sands: 10 of the UK’s weirdest beaches

A regular text search in the json file will easily find this phrase and confirm
that there are only 4 occurrences, pretty close together. So now we know that
this piece of content on the rendered page is connected to this part of the json
object, and in particular we can guess that it's coming from the field with the
key `webTitle`.

This is a good start in understanding the object. But there's a lot that we
still _don't_ know at this point. Let's say we want to find the headlines for
all of the cards on the front page.

If we're lucky, then the key `webTitle` will only exist on representations of
cards. But we can't just assume that, and in many contexts we'd be lucky to find
such a descriptive key in the first place; some APIs typically use `value` as
the final key for the value of interest, and a more descriptive key might only
be found a few branches higher up in the tree, if at all.

<aside>
  <details>
  <summary>
    <em>Are</em> cards the only elements with a `webTitle` property?
  </summary>

As it turns out, far from it! Assuming that I've written my queries correctly,
it looks like there are 2100 objects with a `webTitle` key, and most of them are
attached to 'tags' rather than cards.

```shell
curl https://www.theguardian.com/uk.json\?dcr\=true \
  | jq \
    '[
      path(..
        | objects
        | select(has("webTitle"))
      )
      | . + ["webTitle"]
      | join(".")
    ]'
```

  </details>
</aside>

But let's say we _are_ lucky, and `webTitle` reliably gives us card titles. If
we find all of these values, it won't necessarily tell us much more about how
cards and their properties are stored. (Are all of the article titles contained
in a single array? Or are they nested inside objects which contain other card
properties? Are the cards stored in an array? Or an array of arrays? Or an array
inside a 'section' object, which itself is in an array of sections? etc.) In
this case, looking at the top-level keys doesn't give us too many clues, and
expanding the pretty-printed json tree until we can see the various occurrences
of `webTitle` in context leaves us with tens of thousands of rows to scroll
through.

It's at this point that I've found jless really comes into its own. jless
implements a number of ['vim-inspired' commands](https://jless.io/user-guide.html)
for navigating json structures. There are three sets in particular that I've
found very useful for solving the challenge I've just described.

### Collapse and expand siblings

You can collapse and expand an individual array or object in jless by using the
arrow or space keys, or by clicking. But pressing `c` will collapse the
currently focused node _and all of its siblings_. (Pressing `e` will _expand_
the node and its siblings.) Using these together, you can rapidly toggle the
state of any set of sibling nodes.

The upshot of this is that you can easily confirm that two nodes are in fact
siblings, without having to count indents. It also allows you to explore the
contents of a node's siblings, without having to either expand and collapse a
lot of nodes individually, or scroll through thousands of lines. If you're
anything like me, both of the more 'manual' solutions make it very easy to lose
track of your place and your train of thought.

### Jump to parent node

`H` (or, `shift+h`) will jump the cursor to the parent of the currently focused
node. This is helpful especially if you're focused on a node that's part of an
array or object with a lot of children. Instead of scrolling up and trying to
keep track of indents, you can jump straight to the parent. Combined with `c`
from above, you can very quickly navigate from a given value to the root node by
hopping through the tree _structurally_, rather than navigating by number of
lines in the way you'd get with scrolling or using `PgUp`.

### Copying paths

When we're actually _doing_ things with a json object, we almost always need to
know how to access the data we're interested in via a path which starts at the
root of the object tree. Again, if you're anything like me then reconstructing
the path to a particular piece of data visually is an error-prone process.

jless provides three shortcuts which allow you to easily copy the path to the
currently focused node:

- `yp` (for people who are familiar with vim, it might help to remember that the
  'y' is like 'yank'). `yp` will copy the path to the current node in
  JavaScript-style notation, e.g.:
  ```js
  .pressedPage
    .collections[1]
    .curated[0]
    .supportingContent[0]
    .properties
    .maybeContent
    .metadata
    .webTitle
  ```
- `yb` is very similar, except that it uses the `[key]` style to specify
  dictionary keys as well as array indexes (useful for Python, for instance):

  ```py
  (
    ["pressedPage"]
    ["collections"][1]
    ["curated"][0]
    ["supportingContent"][0]
    ["properties"]
    ["maybeContent"]
    ["metadata"]
    ["webTitle"]
  )
  ```

- `yq` copies the path in a form that works with
  [jq](https://stedolan.github.io/jq/). jq is a tool that can be used to filter
  and transform json data very performantly from the command line. According to
  the jless [user guide](https://jless.io/user-guide.html), using the `yq`
  command will copy "a `jq` style path that will select the currently focused
  node". For our current example, the value copied is:
  ```shell
  .pressedPage \
    .collections[] \
    .curated[] \
    .supportingContent[] \
    .properties \
    .maybeContent \
    .metadata \
    .webTitle
  ```
  Where this option differs from the previous two is that the jq path will (at
  least potentially) select _multiple_ values. There's some complexity to this
  option, which is partly dependent on specific knowledge of jq, but if you're
  interested I've written a separate post which goes into slightly more depth
  about [using jless and jq together](jq-with-jless.md).

## Conclusion

As with pretty much any new tool which makes extensive use of keyboard
shortcuts, it can take a bit of practice before using these commands feels
fluid. But at least in my own case I've found that it's really helped me to
navigate through complex data structures without losing my bearings. If you
decide to give it a go, I hope it works for you, too!

---

[^yaml]:
    It also works for YAML! But I haven't had any reason to explore complex
    YAML files yet, so I don't know much about how it works for those.

[^capi]:
    These json files are publicly accessible, so you can query them if you want
    to, but please note that this is not maintained as a public API as such,
    so there are no guarantees that the content or structure will be stable over
    time. If you're interested in building something with Guardian data, you'd
    be better off looking at the paper's
    [Content API](https://open-platform.theguardian.com/access/).

[^leaves]:
    We can think of a json object as having a tree-like structure. In a
    [tree data structure](<https://en.wikipedia.org/wiki/Tree_(data_structure)>), the
    'leaves' are all the nodes which don't have any 'children' nodes.
