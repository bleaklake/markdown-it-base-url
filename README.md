# markdown-it-base-url

<p align="center" style="display:flex; justify-content:space-around;">
  <img width="128" height="128" src="./assets/choose-markdown.jpg" alt="tex"/>
</p>

This plugin transforms relative path to absolute URL.

## Quick demo

### Code

```ts
import markdownit from "markdown-it";
import { markdownItBaseURL } from "../index.ts";

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});
md.use(markdownItBaseURL("https://www.example.org", ["href", "src"]));

const result = md.render(`
<p align="center">
    <img width="100" height="100" src="./a.svg" alt="a"/>
    <a href="/home">Link</a>
    <img width="100" height="100" src="https://example.com/image.png" alt="image"/>
</p>
`);

console.log(result);
```

### Output

```xml
<p align="center"><img width="100" height="100" src="https://www.example.org/a.svg" alt="a"/><a href="https://www.example.org/home">Link</a><img width="100" height="100" src="https://example.com/image.png" alt="image"/></p>
```