# [装饰]排版(Typography)

- Stack
- Text
- Tile
- Heading
- Paragraph
- Section

```html
<!-- https://vue.chakra-ui.com/stack -->
<c-stack :spacing="3">
  <c-heading as="h5" size="sm">
    In love with Vue & Nuxt
  </c-heading>
  
  <c-text is-truncated color="gray.500" fontSize="6xl" as="i">Italic</c-text>
  <c-text as="u">Underline</c-text>
  <c-text as="abbr">I18N</c-text>
  <c-text as="cite">Citation</c-text>
  <c-text as="del">Deleted</c-text>
  <c-text as="em">Emphasis</c-text>
  <c-text as="ins">Inserted</c-text>
  <c-text as="kbd">Ctrl + C</c-text>
  <c-text as="mark">Highlighted</c-text>
  <c-text as="s">Strikethrough</c-text>
  <c-text as="samp">Sample</c-text>
  <c-text as="sub">sub</c-text>
  <c-text as="sup">sup</c-text>
</c-stack>
```