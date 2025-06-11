"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeHTML = escapeHTML;
exports.customMarkdownToHTML = customMarkdownToHTML;
exports.useMarkdown = useMarkdown;
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
function customMarkdownToHTML(md) {
    var html = md;
    html = html.replace(/```[\s\n]?([\s\S]*?)```/gim, function (_, code) { return "<pre><code>".concat(escapeHTML(code), "</code></pre>"); });
    html = html.replace(/`([^`]+)`/gim, function (_, code) { return "<code>".concat(escapeHTML(code), "</code>"); });
    html = html.replace(/^\s*---\s*$/gim, "<hr>");
    html = html.replace(/^###### (.*)$/gim, "<h6>$1</h6>");
    html = html.replace(/^##### (.*)$/gim, "<h5>$1</h5>");
    html = html.replace(/^#### (.*)$/gim, "<h4>$1</h4>");
    html = html.replace(/^### (.*)$/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*)$/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*)$/gim, "<h1>$1</h1>");
    html = html.replace(/===(.*?)===/gim, "<mark>$1</mark>");
    html = html.replace(/\*\*(.*?)\*\*/gim, function (_, c) { return "<strong>".concat(c, "</strong>"); });
    html = html.replace(/\*(.*?)\*/gim, function (_, c) { return "<em>".concat(c, "</em>"); });
    html = html.replace(/^> ?(.*)$/gim, function (_, c) { return "<blockquote>".concat(c, "</blockquote>"); });
    html = html.replace(/^\d+\.+(.*)/gim, function (_, c) { return "<ol><li>".concat(c, "</li></ol>"); });
    html = html.replace(/^\-+(.*)/gim, function (_, c) { return "<ul><li>".concat(c, "</li></ul>"); });
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    html = html.replace(/\!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" />');
    html = html.replace(/\n{2,}/g, "</p><p>");
    html = "<p>".concat(html, "</p>");
    html = html.replace(/<p><\/p>/g, "");
    return html.trim();
}
var react_1 = require("react");
function useMarkdown(md) {
    return (0, react_1.useMemo)(function () { return customMarkdownToHTML(md); }, [md]);
}
