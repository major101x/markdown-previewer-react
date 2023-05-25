import React, { useState } from 'react';
import { marked } from 'marked';

marked.use({
  breaks: true,
});

const initialMarkdown =
  "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\nHere's an image: ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
const Preview = () => {
  const [input, setInput] = useState(initialMarkdown);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div id="container">
      <header>
        <h1>Markdown Previewer</h1>
      </header>
      <div id="editor-wrap">
        <textarea id="editor" value={input} onChange={handleChange}></textarea>
      </div>
      <div id="preview-wrap">
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(input) }}
        ></div>
      </div>
    </div>
  );
};

export default Preview;
