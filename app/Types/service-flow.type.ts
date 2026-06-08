import { ReactNode } from "react";

export interface ServiceFlow {
    id: number,
    caption: string
    title: string,
    features: string[],
    svgPath: string,
    extraSvg?: ReactNode | null;
}