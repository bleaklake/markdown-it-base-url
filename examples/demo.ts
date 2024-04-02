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
