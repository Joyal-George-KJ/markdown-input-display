import React from "react";
import { defaultStyles } from "./styles/defaultStyles";
interface Props {
    md: string;
    onClose?: () => void;
    styles?: Partial<typeof defaultStyles>;
}
declare const MarkdownPreview: React.FC<Props>;
export default MarkdownPreview;
