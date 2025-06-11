# 📦 markdown-input-display

A lightweight and customizable **React/Next.js** Markdown editor and preview component — **zero dependencies**, full flexibility, and blazing-fast rendering.

![npm](https://img.shields.io/npm/v/markdown-input-display?color=blue)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/markdown-input-display)
![react](https://img.shields.io/badge/react-compatible-blue)
![nextjs](https://img.shields.io/badge/next.js-supported-0070f3)
![license](https://img.shields.io/npm/l/markdown-input-display)
![issues](https://img.shields.io/github/issues/Joyal-George-KJ/markdown-input-display)
![pull requests](https://img.shields.io/github/issues-pr/Joyal-George-KJ/markdown-input-display)
![contributors](https://img.shields.io/github/contributors/Joyal-George-KJ/markdown-input-display)

---

## ✨ Overview

`markdown-input-display` is a plug-and-play **Markdown input with live preview**, designed specifically for React and Next.js environments. It includes a set of composable components, a custom hook for Markdown-to-HTML conversion, and full styling and icon override capabilities.

---

## 🚀 Features

- ⚛️ Built with plain React — no external dependencies
- 🖊️ Editable Markdown input with toolbar shortcuts
- ⚡ Real-time preview mode
- 🧩 Highly customizable via props and styles
- 🧠 Easy-to-use `useMarkdown` hook for conversion
- 🧰 Pluggable icons (SVGs)
- 🎨 Flexible styling with full control over internal elements
- 💼 Ideal for web apps, documentation tools, blogs, note editors, etc.

---

## 📦 Installation

```bash
npm install markdown-input-display
````

or

```bash
yarn add markdown-input-display
```

---

## 📁 Components & API

### 1️⃣ `MarkdownInput`

The Markdown input editor with customizable toolbar and style.

#### Props:

| Prop             | Type                                  | Description                              |
| ---------------- | ------------------------------------- | ---------------------------------------- |
| `md`             | `string`                              | Markdown input string                    |
| `setMd`          | `Dispatch<SetStateAction<string>>`    | Function to update `md`                  |
| `showPreview`    | `boolean`                             | Toggle for showing preview               |
| `setShowPreview` | `Dispatch<SetStateAction<boolean>>`   | Function to toggle preview state         |
| `svgIcons`       | `Record<string, JSX.Element>`         | Custom SVG icons for the toolbar buttons |
| `style`          | `Record<string, React.CSSProperties>` | Custom styles for editor and toolbar     |

---

### 2️⃣ `MarkdownPreview`

Renders the converted HTML content in a preview pane.

#### Props:

| Prop      | Type                                  | Description                                 |
| --------- | ------------------------------------- | ------------------------------------------- |
| `md`      | `string`                              | HTML string to preview (from `useMarkdown`) |
| `onClose` | `() => void`                          | Function to close the preview               |
| `styles`  | `Record<string, React.CSSProperties>` | Custom styles for Preview                   |

---

### 3️⃣ `useMarkdown`

A simple hook to convert a marked Markdown string into HTML.

#### Usage:

```tsx
const html = useMarkdown(markdown);
```

#### Parameters:

| Param | Type     | Description                |
| ----- | -------- | -------------------------- |
| `md`  | `string` | Markdown string to convert |

#### Returns:

| Return | Type     | Description             |
| ------ | -------- | ----------------------- |
| `html` | `string` | HTML output as a string |

---

## 🎨 Style Customization

You can override styles using the `style` prop.

```tsx
const customStyle = {
  wrapper: { backgroundColor: "#f9f9f9" },
  editor: { border: "1px solid #ddd" },
  toolbar: { background: "#fff" },
  toolbarButtons: { gap: "10px" },
  toolbarBtn: { color: "#555" },
  input: { padding: "10px" },
  preview: { padding: "20px" },
  closeBtn: { backgroundColor: "red", color: "#fff" },
};
```

### Available Style Keys

```ts
{
  wrapper,
  editor,
  toolbar,
  toolbarButtons,
  toolbarBtn,
  toolbarBtnHover,
  input,
  preview,
  closeBtn,
  output,
}
```

---

## 🧩 SVG Customization

Pass your own icon set to replace the default toolbar icons.

```tsx
const icons = {
  h1: {
    icon: () => (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z" />
      </svg>
    ),
  },
  b,
  i,
  h2,
  h3,
  h4,
  h5,
  h6,
  code,
  highlight,
  braces,
  link,
  image,
  q,
  hr,
  ul,
  ol,
  preview,
};
```

Each key should map to an object with an `icon` function that returns a JSX SVG.

---

## ✅ Supported Markdown

* Headings: `#` through `######`
* **Bold**: `**text**`
* *Italics*: `*text*`
* Code: `` `inline` `` and code blocks
* Blockquotes: `> text`
* Links: `[title](https://example.com)`
* Images: `![alt](image.jpg)`
* Lists: `- item`, `1. item`
* Custom: `===highlight===` ➝ `<mark>highlight</mark>`

---

## 🔧 Example Usage

```tsx
import { useState } from "react";
import { MarkdownInput, MarkdownPreview, useMarkdown } from "markdown-input-display";

export default function App() {
  const [md, setMd] = useState("# Hello Markdown!");
  const [showPreview, setShowPreview] = useState(false);
  const html = useMarkdown(md);

  return (
    <div>
      <MarkdownInput
        md={md}
        setMd={setMd}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        svgIcons={/* optional custom icons */}
        style={/* optional custom styles */}
      />

      {showPreview && (
        <MarkdownPreview
          md={html}
          onClose={() => setShowPreview(false)}
          styles={/* optional custom styles */}
        />
      )}
    </div>
  );
}
```

---

## 🔭 Roadmap

* ✅ Live Preview Toggle
* 🔄 Efficient internal state handling
* ✍️ More Markdown marker support (tables, checkboxes, etc.)
* 💻 Improved editing experience (drag-drop, file upload)
* 🧪 Tests and CI/CD pipeline
* 📚 Storybook-based documentation

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feat/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request

You can also suggest improvements by opening an issue.

---

## 👥 Contributors

Thanks to these amazing people for helping grow the project:

<a href="https://github.com/Joyal-George-KJ/markdown-input-display/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Joyal-George-KJ/markdown-input-display" />
</a>
<a href="https://chatgpt.com/">
  <img src="https://play-lh.googleusercontent.com/lmG9HlI0awHie0cyBieWXeNjpyXvHPwDBb8MNOVIyp0P8VEh95AiBHtUZSDVR3HLe3A" width="64" height="64" style="border-radius: 64px" />
</a>

> Special thanks to [ChatGPT](https://openai.com/chatgpt) for readme design and documentation assistance! ✨
---

## 📄 License

This project is licensed under the **MIT License** — free to use and modify in personal or commercial projects.

---

## 🌐 Links

* 🔗 [Live Demo (Coming Soon)]()
* 📚 [Documentation (Coming Soon)]()
* 🐛 [Report Issues](https://github.com/Joyal-George-KJ/markdown-input-display/issues)
* 🌟 Star this repo if you find it helpful!