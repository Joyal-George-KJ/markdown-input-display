# 📦 markdown-input-display

A simple React-based Markdown input and preview component. Perfect for building markdown editors in React or Next.js projects without needing external dependencies.

---

![npm](https://img.shields.io/npm/v/markdown-input-display)
![license](https://img.shields.io/npm/l/markdown-input-display)
![react](https://img.shields.io/badge/react-compatible-blue)
![nextjs](https://img.shields.io/badge/next.js-supported-0070f3)

---

## ✨ Features

- Markdown Input with formatting toolbar
- Live Preview support
- Supports headings, bold, italics, code blocks, links, images, lists, and more
- Zero configuration required
- Built using plain React — compatible with Next.js

---

## 📦 Installation

```bash
npm install markdown-input-display
```

or with Yarn:

```bash
yarn add markdown-input-display
```

---

## 🚀 Usage

### 1. Import the components

```tsx
import { MarkdownInput, MarkdownPreview } from "markdown-input-display";
```

### 2. Use in your component

```tsx
import { useState } from "react";
import { MarkdownInput, MarkdownPreview } from "markdown-input-display";

export default function App() {
  const [md, setMd] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      <MarkdownInput
        md={md}
        setMd={setMd}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />

      {showPreview && (
        <MarkdownPreview
          md={md}
          showPreview={showPreview}
          setShowPreview={setShowPreview}
        />
      )}
    </div>
  );
}
```

---

## 🧠 Props

### `<MarkdownInput />`

| Prop            | Type                             | Description                        |
|-----------------|----------------------------------|------------------------------------|
| `md`            | `string`                         | Markdown content                   |
| `setMd`         | `Dispatch<SetStateAction<string>>` | Setter for markdown content        |
| `showPreview`   | `boolean`                        | Toggle for preview display         |
| `setShowPreview`| `Dispatch<SetStateAction<boolean>>` | Setter for preview toggle         |

### `<MarkdownPreview />`

| Prop            | Type                             | Description                        |
|-----------------|----------------------------------|------------------------------------|
| `md`            | `string`                         | Markdown content to render         |
| `showPreview`   | `boolean`                        | Controls visibility                |
| `setShowPreview`| `Dispatch<SetStateAction<boolean>>` | Setter to hide preview (optional) |

---

## ✅ Supported Markdown

- Headings: `#` through `######`
- Bold: `**text**`
- Italics: `*text*`
- Code: `` `inline` `` and code blocks
- Blockquote: `> quote`
- Links: `[title](https://example.com)`
- Images: `![alt](image.jpg)`
- Lists: `- item` and `1. item`
- Custom: `===highlight===` becomes `<mark>`

---

## 🧪 Example

Here’s a quick preview of supported syntax:

```markdown
# Heading 1

**Bold text**

*Italic text*

> Blockquote

`inline code`

```
code block
```

[Link](https://example.com)

![Alt Text](image.jpg)

===highlight===
```

---

## 📄 License

MIT License — free to use in any project.
