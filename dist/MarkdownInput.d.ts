import React from "react";
import { defaultStyles } from "./styles/defaultStyles";
type MarkdownShortcutIcon = Record<string, {
    icon: () => React.JSX.Element;
}>;
type MarkdownInputProps = {
    md: string;
    setMd: React.Dispatch<React.SetStateAction<string>>;
    styles?: Partial<typeof defaultStyles>;
    svgIcons?: MarkdownShortcutIcon;
};
export default function MarkdownInput({ svgIcons, styles, md, setMd, }: MarkdownInputProps): import("react/jsx-runtime").JSX.Element;
export {};
