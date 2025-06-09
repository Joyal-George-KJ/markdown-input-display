"use client";

export function escapeHTML(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

export function customMarkdownToHTML(md: string): string {
    let html = md;

    html = html.replace(
        /```[\s\n]?([\s\S]*?)```/gim,
        (_, code) => `<pre><code>${escapeHTML(code)}</code></pre>`
    );
    html = html.replace(
        /`([^`]+)`/gim,
        (_, code) => `<code>${escapeHTML(code)}</code>`
    );
    html = html.replace(/^\s*---\s*$/gim, "<hr>");
    html = html.replace(/^###### (.*)$/gim, "<h6>$1</h6>");
    html = html.replace(/^##### (.*)$/gim, "<h5>$1</h5>");
    html = html.replace(/^#### (.*)$/gim, "<h4>$1</h4>");
    html = html.replace(/^### (.*)$/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*)$/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*)$/gim, "<h1>$1</h1>");
    html = html.replace(/===(.*?)===/gim, "<mark>$1</mark>");
    html = html.replace(/\*\*(.*?)\*\*/gim, (_, c) => `<strong>${c}</strong>`);
    html = html.replace(/\*(.*?)\*/gim, (_, c) => `<em>${c}</em>`);
    html = html.replace(
        /^> ?(.*)$/gim,
        (_, c) => `<blockquote>${c}</blockquote>`
    );
    html = html.replace(/^\d+\.+(.*)/gim, (_, c) => `<ol><li>${c}</li></ol>`);
    html = html.replace(/^\-+(.*)/gim, (_, c) => `<ul><li>${c}</li></ul>`);
    html = html.replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );
    html = html.replace(
        /\!\[([^\]]*)\]\(([^)]+)\)/gim,
        '<img src="$2" alt="$1" />'
    );
    html = html.replace(/\n{2,}/g, "</p><p>");
    html = `<p>${html}</p>`;
    html = html.replace(/<p><\/p>/g, "");

    return html.trim();
}

import { useMemo } from "react";

export function useMarkdown(md: string) {
    return useMemo(() => customMarkdownToHTML(md), [md]);
}
