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
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className="group relative bg-[#ddccff06] border border-[#352f48]/40 rounded-[2.08vw] p-[2vw] min-h-[28vw] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#ac24ff]/50 hover:bg-[#1e162c]/60 shadow-xl backdrop-blur-sm"
                        >

                            {/* Efekti i imazhit blur në hover brenda çdo karte (.image-140) */}
                            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-105">
                                <img src="/images/hover_card_img.png" alt="hover blur background" className="w-full h-full object-cover mix-blend-color-dodge" />
                            </div>

                            {/* PJESA E SIPËRME: CAPTION & ICON */}
                            <div className="flex flex-col gap-[1.5vw]">

                                <div className="inline-flex items-center gap-[0.5vw] bg-[#1e162c] border border-[#352f48]/60 px-[1vw] py-[0.4vw] rounded-full w-fit">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[1vw] h-[1vw]">
                                        <path d={card.svgPath} fill="#C86FFF" />
                                        {card.extraSvg}
                                    </svg>
                                    <span className="text-[0.85vw] font-medium text-white tracking-wide">{card.caption}</span>
                                </div>

                                {/* TITULLI I KARTËS */}
                                <h4 className="text-white text-[1.5vw] font-medium leading-[130%] tracking-tight">
                                    {card.title}
                                </h4>

                                {/* LISTA E TIPAREVE (.list) */}
                                <ul className="flex flex-col gap-[0.6vw] list-none p-0 mt-[0.5vw]">
                                    {card.features.map((feat, index) => (
                                        <li key={index} className="flex items-center gap-[0.5vw] text-[#a997ce] text-[0.97vw]">
                                            <span className="w-[0.4vw] h-[0.4vw] bg-[#ac24ff] rounded-full block shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* PJESA E POSHTME: BUTONI INTERAKTIV (Me CSS Hover) */}
                            <div className="mt-[2vw] pt-[1vw]">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center w-full py-[0.8vw] bg-gradient-to-r from-[#1b4dfe] via-[#ac24ff] to-[#fe881b] bg-[length:300%_100%] bg-left hover:bg-right rounded-[1vw] text-white text-[0.9vw] font-medium transition-all duration-500 shadow-md group-hover:scale-[1.02]"
                                >
                                    <span className="tracking-wide">Show me more</span>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}