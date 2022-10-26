const marked = require('marked');
const markdownView = document.getElementById("markdown");
const htmlView = document.getElementById("html");

const renderToMarkdown = (markdown) => {
  htmlView.innerHTML = marked(markdown, { sanitize: true });
};

markdownView.addEventListener("keyup", (event) => {
  const content = event.target.value;
  renderToMarkdown(content);
});
