import { ReactNode } from "react";

export interface ServiceFlow {
    id: string,
    caption: string
    title: string,
    features: string[],
    svgPath: string,
    extraSvg?: ReactNode | null;
}