import ServiceFlowCards from "./ServiceFlowSteps";

const cardsData = [
    {
        id: "design",
        caption: "Design",
        title: "Realize new ideas and opportunities without the hassle.",
        features: ["Dedicated specialists", "Decision-ready solutions"],
        svgPath: "M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM13.6 8C13.6 11.0928 11.0928 13.6 8 13.6C4.90721 13.6 2.4 11.0928 2.4 8C2.4 4.90721 4.90721 2.4 8 2.4C11.0928 2.4 13.6 4.90721 13.6 8Z",
        extraSvg: null
    },
    {
        id: "onboarding",
        caption: "Onboarding",
        title: "Qualify equipment with far fewer interactions.",
        features: ["Cross-company alignment", "Follow-through ownership"],
        svgPath: "M0.970459 8C0.970459 11.866 4.10447 15 7.97046 15C11.8365 15 14.9705 11.866 14.9705 8C14.9705 4.13401 11.8365 1 7.97046 1C4.10447 1 0.970459 4.13401 0.970459 8ZM13.5705 8C13.5705 11.0928 11.0633 13.6 7.97046 13.6C4.87766 13.6 2.37046 11.0928 2.37046 8C2.37046 4.90721 4.87766 2.4 7.97046 2.4C11.0633 2.4 13.5705 4.90721 13.5705 8Z",
        extraSvg: <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 10 6)" fill="#C86FFF" />
    },
    {
        id: "delivery",
        caption: "Delivery",
        title: "Receive the right materials on site without drama.",
        features: ["Product fit/spec validations", "Change ownership"],
        svgPath: "M0.970459 8C0.970459 11.866 4.10447 15 7.97046 15C11.8365 15 14.9705 11.866 14.9705 8C14.9705 4.13401 11.8365 1 7.97046 1C4.10447 1 0.970459 4.13401 0.970459 8ZM13.5705 8C13.5705 11.0928 11.0633 13.6 7.97046 13.6C4.87766 13.6 2.37046 11.0928 2.37046 8C2.37046 4.90721 4.87766 2.4 7.97046 2.4C11.0633 2.4 13.5705 4.90721 13.5705 8Z",
        extraSvg: <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 11 5)" fill="#C86FFF" />
    },
    {
        id: "deployment",
        caption: "Deployment",
        title: "Commission with curated context, not backtracking.",
        features: ["Undisrupted workflows", "Clean handoffs"],
        svgPath: "M0.970459 8C0.970459 11.866 4.10447 15 7.97046 15C11.8365 15 14.9705 11.866 14.9705 8C14.9705 4.13401 11.8365 1 7.97046 1C4.10447 1 0.970459 4.13401 0.970459 8ZM13.5705 8C13.5705 11.0928 11.0633 13.6 7.97046 13.6C4.87766 13.6 2.37046 11.0928 2.37046 8C2.37046 4.90721 4.87766 2.4 7.97046 2.4C11.0633 2.4 13.5705 4.90721 13.5705 8Z",
        extraSvg: <circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 12 4)" fill="#C86FFF" />
    }
];

export default function ServicesSection() {
    return (
        <section className="w-full bg-[#13101c] py-[8vw] px-[4vw] relative overflow-hidden">
            <div className="max-w-[92vw] mx-auto flex flex-col gap-[4vw] relative z-10">
                {/* HEADER I SEKSIONIT (TITULLI & DIZALNI) */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-[2vw]">
                    <div className="max-w-[45vw]">
                        <h3 className="text-white text-[2.3vw] font-semibold tracking-tight leading-[115%]">
                            Building solutions that help businesses move forward.<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b]">
                                Shaped by 9 years of building and solving.
                            </span>
                        </h3>
                    </div>
                    <div className="max-w-[32vw]">
                        <p className="text-[#a997ce] text-[1.11vw] leading-[140%]">
                            For situational clarity through constant change. Proven on 530+ MW of data center builds.
                        </p>
                    </div>
                </div>

                {/* GRIDI I KATËR KARTAVE (.crads-container) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5vw] mt-[2vw]">
                    {cardsData.map((card, index) => (
                        <ServiceFlowCards key={index} card={card} />
                    ))}
                </div>

            </div>
        </section>
    );
}