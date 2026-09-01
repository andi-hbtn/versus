import CaseCard from "./CaseCard";
import { CaseStudiesGridProps } from "@/app/Types/case-study.types";

export default function CaseStudiesGrid({ cases }: CaseStudiesGridProps) {
    return (
        <section className="font-maven max-w-8xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cases.map((c) => (
                    <CaseCard key={c.id} {...c} />
                ))}
            </div>
        </section>
    );
}
