"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var useMarkdown_1 = require("./hook/useMarkdown");
var defaultStyles_1 = require("./styles/defaultStyles");
var MarkdownPreview = function (_a) {
    var md = _a.md, onClose = _a.onClose, styles = _a.styles;
    var html = (0, useMarkdown_1.useMarkdown)(md);
    var mergedStyle = __assign(__assign({}, defaultStyles_1.defaultStyles), styles);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "markdown-preview", style: mergedStyle.preview, children: [(0, jsx_runtime_1.jsx)("button", { className: "close-btn", style: mergedStyle.closeBtn, onClick: onClose, "aria-label": "Close Preview", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-x", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "markdown-output", style: mergedStyle.output, dangerouslySetInnerHTML: { __html: html } })] }));
};
exports.default = MarkdownPreview;
