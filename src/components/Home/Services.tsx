import BlockTitle from "../../ui/BlockTitle";
import Icon1 from "../../assets/LinkedIn.png";
import Icon2 from "../../assets/Reddit.png";
import Icon3 from "../../assets/X.png";
import Image1 from "../../assets/ServicesCardImage.png";
import ArrowNarrow from "../../ui/ArrowNarrow";

const Socials = [
  {
    icon: Icon1,
    title: "LinkedIn",
  },
  {
    icon: Icon2,
    title: "Reddit",
    coming: true,
  },
  {
    icon: Icon3,
    title: "X (Twitter)",
    coming: true,
  },
];

const Cards = [
  {
    image: Image1,
    title: "Rent verified accounts",
    subtitle:
      "Rent verified LinkedIn accounts that are manually warmed, geo-matched, and ready for reliable outreach from day one.",
    coming: false,
  },
  {
    image: Image1,
    title: "Buy new connections",
    subtitle:
      "Grow your professional network with targeted connection campaigns tailored to your audience.",
    coming: true,
  },
  {
    image: Image1,
    title: "Buy post likes",
    subtitle:
      "Increase post visibility with authentic engagement from active LinkedIn accounts.",
    coming: true,
  },
];

function Services() {
  return (
    <>
      <div className="container-custom flex-col items-center gap-12 max-xl:gap-10 max-md:gap-8">
        <BlockTitle
          title="Find exactly what your team needs."
          underTitle="Services"
        />

        <div className="flex flex-col gap-8 max-md:gap-5 w-full items-center">
          <div className="flex gap-2 items-center lg:w-max  p-2 rounded-full lg:bg-white lg:shadow-lg max-lg:flex-wrap max-md:justify-center">
            {Socials.map((item, i) => (
              <div
                key={i}
                className={`flex h-11 max-md:h-9 items-center gap-2 py-2 px-6 max-md:px-2 rounded-full border
                   ${item.coming ? "border-[#01102026] bg-white" : "border-[#011020] bg-[#011020]"}`}
              >
                <div className="w-5 h-5 max-md:w-4 max-md:h-4">
                  <img src={item.icon} />
                </div>
                <div
                  className={`font-geist text-lg max-md:text-sm  ${item.coming ? "text-[#01102080]" : "text-white"}`}
                >
                  {item.title}
                </div>
                {item.coming && (
                  <div className="flex gap-1.5 items-center px-2 py-1 rounded-full bg-[#8088901A]">
                    <div className="rounded-full w-1 h-1 bg-[#01102099]"></div>
                    <div className="text-[#01102099] font-geist text-sm max-md:text-xs text-nowrap">
                      Coming soon
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 self-stretch w-full">
            {Cards.map((card, i) => (
              <div
                key={i}
                className="flex max-w-105 flex-col gap-8 rounded-lg overflow-hidden"
              >
                <div className="w-full h-auto ">
                  <img src={card.image} />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-[#011020] font-orbitron font-bold text-xl">
                      {card.title}
                    </div>
                    {card.coming ? (
                      <div className="flex gap-1.5 items-center px-2 py-1 rounded-full bg-[#8088901A]">
                        <div className="rounded-full w-1 h-1 bg-[#01102099]"></div>
                        <div className="text-[#01102099] font-geist text-sm">
                          Coming soon
                        </div>
                      </div>
                    ) : (
                      <ArrowNarrow />
                    )}
                  </div>

                  <div className="font-geist text-[#011020CC] text-base tracking-tight">
                    {card.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
