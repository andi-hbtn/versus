export interface ContentSectionProps {
    id: number,
    title: string,
    description?: string
}


export interface StackItem {
    id: number;
    title: string;
    techs?: string[];
}

export type CardItem = ContentSectionProps | StackItem;