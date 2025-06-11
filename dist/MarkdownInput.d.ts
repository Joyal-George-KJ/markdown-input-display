import React from "react";
import { defaultStyles } from "./styles/defaultStyles";
type MarkdownShortcutIcon = Record<string, {
    icon: () => React.JSX.Element;
}>;
type MarkdownInputProps = {
    md: string;
    setMd: React.Dispatch<React.SetStateAction<string>>;
    style?: Partial<typeof defaultStyles>;
    svgIcons?: MarkdownShortcutIcon;
};
export default function MarkdownInput({ svgIcons, style, md, setMd, }: MarkdownInputProps): import("react/jsx-runtime").JSX.Element;
export {};
