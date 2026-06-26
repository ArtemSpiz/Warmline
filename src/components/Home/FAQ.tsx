import { useState, useRef, useEffect } from "react";
import BlockTitle from "../../ui/BlockTitle";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";
import FAQImg from "../../assets/FAQImg.png";

const FaqCards = [
  {
    title: "Do I rent or own the account?",
    description:
      "You can choose either option. Rent accounts for maximum flexibility or purchase them for long-term use. Both options are available directly through the marketplace.",
  },
  {
    title: "What's included with every account?",
    description:
      "You can choose either option. Rent accounts for maximum flexibility or purchase them for long-term use. Both options are available directly through the marketplace.",
  },
  {
    title: "How long does delivery take?",
    description:
      "You can choose either option. Rent accounts for maximum flexibility or purchase them for long-term use. Both options are available directly through the marketplace.",
  },
  {
    title: "What happens if an account gets restricted?",
    description:
      "You can choose either option. Rent accounts for maximum flexibility or purchase them for long-term use. Both options are available directly through the marketplace.",
  },
  {
    title: "How do I access my account?",
    description:
      "You can choose either option. Rent accounts for maximum flexibility or purchase them for long-term use. Both options are available directly through the marketplace.",
  },
  {
    title: "Can I manage multiple accounts?",
    description:
      "You can choose either option. Rent accounts for maximum flexibility or purchase them for long-term use. Both options are available directly through the marketplace.",
  },
  {
    title: "Do you offer support?",
    description:
      "You can choose either option. Rent accounts for maximum flexibility or purchase them for long-term use. Both options are available directly through the marketplace.",
  },
  {
    title: "Can I purchase additional services later?",
    description:
      "You can choose either option. Rent accounts for maximum flexibility or purchase them for long-term use. Both options are available directly through the marketplace.",
  },
];

function FaqItem({
  card,
  isActive,
  isLast,
  onClick,
}: {
  card: { title: string; description: string };
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? contentRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  return (
    <div
      className={`flex flex-col py-6 border-t border-[#00000033] cursor-pointer ${
        isLast ? "border-b" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center gap-6">
        <div className="font-geist text-[#011020] text-xl max-md:text-base font-medium">
          {card.title}
        </div>
        <div className="w-8 h-8 shrink-0">
          <img
            src={isActive ? Minus : Plus}
            alt={isActive ? "collapse" : "expand"}
          />
        </div>
      </div>

      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={contentRef}>
          <div className="text-[#011020CC] text-base max-md:text-sm font-geist pt-5">
            {card.description}
          </div>
        </div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <>
      <div className="flex justify-between w-full items-center bg-[#F5F5F5] px-10 py-6 rounded-lg overflow-hidden max-md:flex-col max-md:p-6 max-md:gap-4 max-md:items-start">
        <div className="flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-6">
          <div className="w-19.5 h-19.5 max-md:w-14 max-md:h-14">
            <img src={FAQImg} />
          </div>

          <div className="flex flex-col">
            <div className="font-geist text-xl max-md:text-base max-xl:text-base  text-[#011020]">
              Didn't find your answer?
            </div>
            <div className="text-base font-geist max-md:text-sm">
              Our team is here to help. If you couldn't find the answer you're
              looking for, feel free to get in touch.
            </div>
          </div>
        </div>

        <button className="py-4 px-8 max-h-13 flex items-center rounded-sm bg-[#011020] text-white font-bold text-base uppercase">
          Contact us
        </button>
      </div>
    </>
  );
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  const half = Math.ceil(FaqCards.length / 2);
  const leftCol = FaqCards.slice(0, half);
  const rightCol = FaqCards.slice(half);

  return (
    <>
      <div className="container-custom flex-col gap-16 max-md:gap-10">
        <BlockTitle
          title="Frequently asked questions."
          underTitle="FAQ"
          align="start"
        />
        <div className="flex gap-x-10 md:min-h-100 max-md:flex-col max-md:rounded-md overflow-hidden">
          <div className="flex-1 flex flex-col md:rounded-lg overflow-hidden">
            {leftCol.map((card, i) => (
              <FaqItem
                key={i}
                card={card}
                isActive={activeIndex === i}
                isLast={i === leftCol.length - 1}
                onClick={() => handleToggle(i)}
              />
            ))}
          </div>

          <div className="flex-1 flex flex-col md:rounded-lg overflow-hidden">
            {rightCol.map((card, i) => {
              const globalIndex = half + i;
              return (
                <FaqItem
                  key={globalIndex}
                  card={card}
                  isActive={activeIndex === globalIndex}
                  isLast={i === rightCol.length - 1}
                  onClick={() => handleToggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>

        <Banner />
      </div>
    </>
  );
}

export default FAQ;
