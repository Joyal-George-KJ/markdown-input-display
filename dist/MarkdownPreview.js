"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var useMarkdown_1 = require("./hook/useMarkdown");
var MarkdownPreview = function (_a) {
    var md = _a.md, onClose = _a.onClose;
    var html = (0, useMarkdown_1.useMarkdown)(md);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "markdown-preview", children: [(0, jsx_runtime_1.jsx)("button", { className: "close-btn", onClick: onClose, "aria-label": "Close Preview", children: "\u00D7" }), (0, jsx_runtime_1.jsx)("div", { className: "markdown-output", dangerouslySetInnerHTML: { __html: html } })] }));
};
exports.default = MarkdownPreview;
