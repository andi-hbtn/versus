export interface CaseStudy {
    id: number;
    client: string;
    sector: string;
    description: string;
    url: string;
    tags?: string[];
}

export interface CaseStudiesGridProps {
    cases: CaseStudy[];
}
