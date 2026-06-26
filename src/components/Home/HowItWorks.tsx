import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HowImg1 from "../../assets/HowImg1.png";
import HowImg2 from "../../assets/HowImg2.png";
import HowImg3 from "../../assets/HowImg3.png";
import BlockTitle from "../../ui/BlockTitle";

gsap.registerPlugin(ScrollTrigger);

const Cards = [
  {
    image: HowImg1,
    title: "Browse Marketplace",
    subtitle:
      "Browse a curated marketplace of verified LinkedIn accounts and outreach services. Every listing includes clear details, transparent pricing, and everything you need to make the right choice.",
  },
  {
    image: HowImg2,
    title: "Complete Your Order",
    subtitle:
      "Select your products, complete checkout, and let our team handle the operational work. From preparation to delivery, every step is managed for you.",
  },
  {
    image: HowImg3,
    title: "Everything in Your Dashboard",
    subtitle:
      "Once your order is ready, everything is available in your Workspace. Access credentials securely, track replacements, monitor billing, and manage your LinkedIn infrastructure from one place.",
  },
];

function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !sticky || cards.length === 0) return;

    const isMobile = window.innerWidth < 768;
    const totalCards = cards.length;

    const slideHeight = isMobile
      ? (cardsRef.current[0]?.offsetHeight ?? window.innerHeight)
      : window.innerHeight;

    const scrollDistance = (totalCards - 1) * slideHeight;

    // Встановлюємо висоту секції щоб ScrollTrigger мав де скролити
    section.style.minHeight = `${scrollDistance + window.innerHeight}px`;

    cards.forEach((card, i) => {
      if (i === 0) return;
      gsap.set(card, {
        xPercent: 105,
        zIndex: i + 1,
      });
    });

    gsap.set(cards[0], { zIndex: 1 });

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: sticky,
      pinSpacing: false, // висотою керуємо самі через minHeight
    });

    cards.forEach((card, i) => {
      if (i === 0) return;

      const startProgress = (i - 1) / (totalCards - 1);

      ScrollTrigger.create({
        trigger: section,
        start: `top+=${startProgress * scrollDistance} top`,
        end: `top+=${(i / (totalCards - 1)) * scrollDistance} top`,
        scrub: 0.6,
        onUpdate: (self) => {
          gsap.set(card, {
            xPercent: gsap.utils.interpolate(105, 0, self.progress),
          });
          if (i > 1) {
            gsap.set(cards[i - 1], {
              scale: gsap.utils.interpolate(1, 0.96, self.progress),
            });
          }
        },
        onLeave: () => {
          gsap.set(card, { xPercent: 0 });
        },
        onEnterBack: () => {
          gsap.set(card, { xPercent: 105 });
          if (i > 1) gsap.set(cards[i - 1], { scale: 1 });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      section.style.minHeight = "";
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <div
        ref={stickyRef}
        className="h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-full max-w-[1600px] px-4 mx-auto max-md:px-0">
          <div
            className="relative w-full max-md:h-[calc(100svh-2rem)]"
            style={{ aspectRatio: "16/7" }}
          >
            {Cards.map((card, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="absolute inset-0 flex flex-row max-md:flex-col rounded-xl overflow-hidden will-change-transform max-md:h-182 max-md:my-auto"
                style={{ zIndex: i + 1 }}
              >
                <div className="w-1/2 h-full max-md:w-full max-md:h-[55%] ">
                  <img
                    src={card.image}
                    className="w-full h-full object-cover"
                    alt={card.title}
                  />
                </div>

                <div className="w-1/2 max-md:w-full max-md:pt-12  max-md:h-[45%] bg-[#F5F5F5] flex flex-col justify-between p-10 max-xl:p-8 max-md:p-6 ">
                  <div className="flex flex-col gap-5">
                    <BlockTitle
                      title={card.title}
                      underTitle="How it works"
                      align="start"
                      alignMobile="start"
                    />
                    <div className="subtitle md:hidden text-[#011020CC]">
                      {card.subtitle}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 max-md:gap-4">
                    <div className="subtitle max-md:hidden text-[#011020CC]">
                      {card.subtitle}
                    </div>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-2 items-center">
                        {Cards.map((_, dotIdx) => (
                          <div
                            key={dotIdx}
                            className="rounded-full transition-all duration-300 w-2.5 h-2.5 max-md:w-1.5 max-md:h-1.5"
                            style={{
                              background:
                                dotIdx === i ? "#011020" : "#01102033",
                            }}
                          />
                        ))}
                      </div>
                      <div className="text-[#01102080] text-sm max-md:text-xs">
                        0{i + 1} of 0{Cards.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
