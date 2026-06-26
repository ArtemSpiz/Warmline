import BlockTitle from "../../ui/BlockTitle";
import Photo1 from "../../assets/Photo1.png";
import Photo2 from "../../assets/Photo2.png";
import { useState, useEffect, useRef } from "react";

const Cards = [
  {
    title: "Agencies",
    response:
      "The biggest difference isn't the accounts—it's everything around them. Having replacements, billing, credentials, and support in one place removed hours of operational work from our team every week.",
    name: "Marta K.",
    job: "Agency Founder",
    photo: Photo1,
  },
  {
    title: "Sales & GTM Teams",
    response:
      "Provisioning new SDRs used to slow us down every time we hired. Now we can get verified accounts, manage replacements, and keep the entire team organized from a single dashboard.",
    name: "Devin R.",
    job: "Head of SDR",
    photo: Photo2,
  },
  {
    title: "Recruiters",
    response:
      "We wanted to protect our personal LinkedIn profiles without limiting our sourcing efforts. Warmline gave us dedicated accounts, reliable support, and a workflow that scales with our hiring needs.",
    name: "Alex M.",
    job: "Talent Acquisition Lead",
    photo: Photo1,
  },
  {
    title: "Founders & Startups",
    response:
      "As a small team, we didn't have time to manage proxies, credentials, or account setup. Warmline handled the operational side so we could focus entirely on building pipeline and closing customers.",
    name: "Kevin P.",
    job: "Founder",
    photo: Photo2,
  },
];

function Built() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = (i: number) => {
    if (i === activeIndex || animating) return;
    setAnimating(true);

    timeoutRef.current = setTimeout(() => {
      setDisplayIndex(i);
      setActiveIndex(i);
      setAnimating(false);
    }, 280);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const activeCard = Cards[displayIndex];

  return (
    <div className="container-custom flex-col gap-16 max-md:gap-10">
      <BlockTitle
        title="Made for the way your team works."
        underTitle="Built for every team"
        align="start"
      />

      <div className="flex gap-10 items-center max-md:flex-col">
        {/* Left: tab list */}
        <div className="flex flex-col flex-1">
          {Cards.map((card, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={card.title}
                className={`
                  border-b border-[#00000033]
                  ${i === 0 ? "border-t border-[#00000033]" : ""}
                `}
              >
                <button
                  onClick={() => handleSelect(i)}
                  className="group w-full flex items-center gap-4 py-8 transition-all duration-200 max-md:py-6"
                >
                  <div className="relative w-2 h-2 overflow-hidden bg-[#0110200f]">
                    <div
                      className={`
                        absolute inset-x-0 top-0 bottom-0
                        transition-transform duration-300 ease-out origin-top
                        ${isActive ? "bg-[#011020] scale-y-100" : "bg-transparent scale-y-0"}
                      `}
                    />
                  </div>

                  <span
                    className={`
                      text-5 font-bold transition-all duration-200
                      ${
                        isActive
                          ? "text-[#011020]"
                          : "text-[#999FA7] group-hover:text-[#555E68]"
                      }
                    `}
                  >
                    {card.title}
                  </span>
                </button>

                <div
                  className={`
                    md:hidden overflow-hidden
                    transition-[max-height,opacity] ease-in-out
                    ${
                      isActive
                        ? "max-h-[500px] opacity-100 duration-500"
                        : "max-h-0 opacity-0 duration-300"
                    }
                  `}
                >
                  <div
                    className={`
                      pb-6 transition-transform duration-500 ease-in-out
                      ${isActive ? "translate-y-0" : "-translate-y-2"}
                    `}
                  >
                    <div className="w-full bg-[#F5F5F5] rounded-sm p-6 flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="font-geistMono h-6 font-black text-5xl text-[#01102066] leading-none">
                          “
                        </div>
                        <p className="font-geist text-sm text-[#011020] leading-relaxed">
                          {card.response}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white ring-offset-2 ring-offset-[#F5F5F5] flex-shrink-0">
                          <img
                            src={card.photo}
                            className="w-full h-full object-cover"
                            alt={card.name}
                          />
                        </div>
                        <div>
                          <div className="text-sm font-semibold leading-none text-[#011020]">
                            {card.name}
                          </div>
                          <div className="text-xs leading-none text-[#01102099] mt-1">
                            {card.job}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-157 w-full bg-[#F5F5F5] h-[-webkit-fill-available] rounded-2xl p-10 flex flex-col justify-between lg:min-h-100 relative overflow-hidden max-lg:flex-1 max-lg:p-6 max-lg:rounded-sm max-md:hidden">
          <div className="flex flex-col gap-2">
            <div className="font-geistMono font-black text-6xl text-[#01102066] leading-none max-lg:text-5xl">
              "
            </div>
            <p
              className={`font-geist text-lg text-[#011020] leading-[110%] max-lg:text-sm transition-all ${
                animating
                  ? "opacity-0 translate-y-3"
                  : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDuration: animating ? "180ms" : "300ms" }}
            >
              {activeCard.response}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-full overflow-hidden ring-2 ring-white ring-offset-2 ring-offset-[#F5F5F5] transition-all ${
                animating
                  ? "opacity-0 translate-y-3"
                  : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDuration: animating ? "150ms" : "300ms" }}
            >
              <img
                src={activeCard.photo}
                className="w-full h-full object-cover"
                alt={activeCard.name}
              />
            </div>
            <div
              className={`transition-all ${
                animating
                  ? "opacity-0 translate-y-3"
                  : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDuration: "300ms" }}
            >
              <div className="text-lg leading-none text-[#011020]">
                {activeCard.name}
              </div>
              <div className="text-sm leading-none text-[#01102099] mt-0.5">
                {activeCard.job}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Built;
