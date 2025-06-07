"use client";

import React from "react";
import { useMarkdown } from "./hook/useMarkdown";

interface Props {
  md: string;
  onClose?: () => void;
}

const MarkdownPreview: React.FC<Props> = ({ md, onClose }) => {
  const html = useMarkdown(md);

  return (
    <div className="absolute w-full h-screen bg-white p-4 overflow-auto z-50">
      <button
        className="absolute top-2 right-2 text-lg font-bold"
        onClick={onClose}
        aria-label="Close Preview"
      >
        ×
      </button>
      <div
        className="prose max-w-none text-neutral-900"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownPreview;