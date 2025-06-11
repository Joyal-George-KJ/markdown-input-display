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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarkdownInput;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var MarkdownPreview_1 = __importDefault(require("./MarkdownPreview"));
var defaultStyles_1 = require("./styles/defaultStyles");
var markdownShortcuts = {
    h1: {
        transform: function (s) { return "\n#".concat(s, "\n"); },
    },
    h2: {
        transform: function (s) { return "\n##".concat(s, "\n"); },
    },
    h3: {
        transform: function (s) { return "\n###".concat(s, "\n"); },
    },
    h4: {
        transform: function (s) { return "\n####".concat(s, "\n"); },
    },
    h5: {
        transform: function (s) { return "\n#####".concat(s, "\n"); },
    },
    h6: {
        transform: function (s) { return "\n######".concat(s, "\n"); },
    },
    b: {
        transform: function (s) { return "**".concat(s, "**"); },
    },
    i: {
        transform: function (s) { return "*".concat(s, "*"); },
    },
    highlight: {
        transform: function (s) { return "===".concat(s, "==="); },
    },
    hr: {
        transform: function () { return "\n---\n"; },
    },
    code: {
        transform: function (s) { return "`".concat(s, "`"); },
    },
    braces: {
        transform: function (s) { return "\n```\n".concat(s, "\n```\n"); },
    },
    link: {
        transform: function (s) { return "[".concat(s || "title", "](https://example.com)"); },
    },
    image: {
        transform: function (s) { return "![".concat(s || "alt text", "](image.jpg)"); },
    },
    q: {
        transform: function (s) { return ">".concat(s); },
    },
    ol: {
        transform: function (s) { return "1.".concat(s); },
    },
    ul: {
        transform: function (s) { return "-".concat(s); },
    },
};
function MarkdownInput(_a) {
    var _b;
    var svgIcons = _a.svgIcons, style = _a.style, md = _a.md, setMd = _a.setMd;
    var inputRef = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(false), previewToggle = _c[0], setPreviewToggle = _c[1];
    var mergedStyles = __assign(__assign({}, defaultStyles_1.defaultStyles), style);
    var markdownShortcutIcons = __assign({
        h1: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-type-h1", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z" }) })); },
        },
        h2: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-type-h2", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13zm3.174-7.071v-.05c0-.934.66-1.752 1.801-1.752 1.005 0 1.76.639 1.76 1.651 0 .898-.582 1.58-1.12 2.19l-3.69 4.2V13h6.331v-1.149h-4.458v-.079L13.9 8.786c.919-1.048 1.666-1.874 1.666-3.101C15.565 4.149 14.35 3 12.499 3 10.46 3 9.384 4.393 9.384 5.879v.05z" }) })); },
        },
        h3: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-type-h3", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M11.07 8.4h1.049c1.174 0 1.99.69 2.004 1.724s-.802 1.786-2.068 1.779c-1.11-.007-1.905-.605-1.99-1.357h-1.21C8.926 11.91 10.116 13 12.028 13c1.99 0 3.439-1.188 3.404-2.87-.028-1.553-1.287-2.221-2.096-2.313v-.07c.724-.127 1.814-.935 1.772-2.293-.035-1.392-1.21-2.468-3.038-2.454-1.927.007-2.94 1.196-2.981 2.426h1.23c.064-.71.732-1.336 1.744-1.336 1.027 0 1.744.64 1.744 1.568.007.95-.738 1.639-1.744 1.639h-.991V8.4ZM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13z" }) })); },
        },
        h4: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-type-h4", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M13.007 3H15v10h-1.29v-2.051H8.854v-1.18C10.1 7.513 11.586 5.256 13.007 3m-2.82 6.777h3.524v-5.62h-.074a95 95 0 0 0-3.45 5.554zM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13z" }) })); },
        },
        h5: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-type-h5", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M9 10.516h1.264c.193.976 1.112 1.364 2.01 1.364 1.005 0 2.067-.782 2.067-2.247 0-1.292-.983-2.082-2.089-2.082-1.012 0-1.658.596-1.924 1.077h-1.12L9.646 3h5.535v1.141h-4.415L10.5 7.28h.072c.201-.316.883-.84 1.967-.84 1.709 0 3.13 1.177 3.13 3.158 0 2.025-1.407 3.403-3.475 3.403-1.809 0-3.1-1.048-3.194-2.484ZM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.512h4.854V13z" }) })); },
        },
        h6: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-type-h6", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M15.596 5.178H14.3c-.106-.444-.62-1.072-1.706-1.072-1.332 0-2.325 1.269-2.325 3.947h.07c.268-.67 1.043-1.445 2.445-1.445 1.494 0 3.017 1.064 3.017 3.073C15.8 11.795 14.37 13 12.48 13c-1.036 0-2.093-.36-2.77-1.452C9.276 10.836 9 9.808 9 8.37 9 4.656 10.494 3 12.636 3c1.812 0 2.883 1.113 2.96 2.178m-5.151 4.566c0 1.367.944 2.15 2.043 2.15 1.128 0 2.037-.684 2.037-2.136 0-1.41-1-2.065-2.03-2.065-1.19 0-2.05.853-2.05 2.051M7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13z" }) })); },
        },
        b: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-type-bold", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" }) })); },
        },
        i: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-type-italic", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" }) })); },
        },
        highlight: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-marker-tip", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5 6.064-1.281-4.696A.5.5 0 0 0 9.736 9H6.264a.5.5 0 0 0-.483.368l-1.28 4.696A6.97 6.97 0 0 0 8 15c1.275 0 2.47-.34 3.5-.936m.873-.598a7 7 0 1 0-8.746 0l1.19-4.36a1.5 1.5 0 0 1 1.31-1.1l1.155-3.851c.213-.713 1.223-.713 1.436 0l1.156 3.851a1.5 1.5 0 0 1 1.31 1.1z" }) })); },
        },
        hr: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-hr", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 3H4a1 1 0 0 0-1 1v2.5H2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5h-1V4a1 1 0 0 0-1-1M2 9.5h1V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5h1V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm-1.5-2a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z" }) })); },
        },
        code: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-code", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" }) })); },
        },
        braces: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-braces", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" }) })); },
        },
        link: {
            icon: function () { return ((0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-link-45deg", viewBox: "0 0 16 16", children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" })] })); },
        },
        image: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-image-fill", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" }) })); },
        },
        q: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-quote", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" }) })); },
        },
        ol: {
            icon: function () { return ((0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-list-ol", viewBox: "0 0 16 16", children: [(0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" }), (0, jsx_runtime_1.jsx)("path", { d: "M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" })] })); },
        },
        ul: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-list-ul", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }) })); },
        },
        preview: {
            icon: function () { return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-play-fill", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" }) })); },
        },
    }, svgIcons);
    var handleClick = function (e) {
        var key = e.currentTarget.id;
        if (!inputRef.current)
            return;
        var textarea = inputRef.current;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selected = md.slice(start, end);
        var formatter = markdownShortcuts[key].transform;
        if (!formatter)
            return;
        var newMd = md.slice(0, start) + formatter(selected) + md.slice(end);
        setMd(newMd);
        // Optional: re-focus and reset cursor
        setTimeout(function () {
            textarea.focus();
            textarea.selectionStart = textarea.selectionEnd =
                start + formatter(selected).length;
        }, 0);
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: mergedStyles.wrapper, children: (0, jsx_runtime_1.jsxs)("div", { style: mergedStyles.editor, children: [(0, jsx_runtime_1.jsxs)("div", { style: mergedStyles.toolbar, children: [(0, jsx_runtime_1.jsx)("div", { style: mergedStyles.toolbarButtons, children: Object.keys(markdownShortcuts).map(function (val, ind) {
                                var _a;
                                return ((0, jsx_runtime_1.jsx)("button", { onClick: handleClick, id: val, style: mergedStyles.toolbarBtn, onMouseOver: function (e) {
                                        e.currentTarget.style.background =
                                            mergedStyles.toolbarBtnHover.backgroundColor;
                                    }, onMouseOut: function (e) {
                                        e.currentTarget.style.background =
                                            "transparent";
                                    }, children: (_a = markdownShortcutIcons[val]) === null || _a === void 0 ? void 0 : _a.icon() }, ind));
                            }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setPreviewToggle(!previewToggle); }, style: mergedStyles.toolbarBtn, onMouseOver: function (e) {
                                    e.currentTarget.style.background =
                                        mergedStyles.toolbarBtnHover.backgroundColor;
                                }, onMouseOut: function (e) {
                                    e.currentTarget.style.background =
                                        "transparent";
                                }, children: (_b = markdownShortcutIcons.preview) === null || _b === void 0 ? void 0 : _b.icon() }) })] }), previewToggle && ((0, jsx_runtime_1.jsx)(MarkdownPreview_1.default, { onClose: function () { return setPreviewToggle(false); }, md: md })), (0, jsx_runtime_1.jsx)("textarea", { ref: inputRef, value: md, onChange: function (e) { return setMd(e.target.value); }, style: mergedStyles.input, name: "markdown-input", id: "markdown-input", "aria-label": "markdown input", spellCheck: "false", placeholder: "Write what you want here!", rows: 10, cols: 100 })] }) }));
}
