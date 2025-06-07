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
        <div className="markdown-preview">
            <button
                className="close-btn"
                onClick={onClose}
                aria-label="Close Preview"
            >
                ×
            </button>
            <div
                className="markdown-output"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
};

export default MarkdownPreview;
