import BlockTitle from "../../ui/BlockTitle";
import Cross from "../../assets/WhyCrose.png";
import Check from "../../assets/WhyCheck.png";

const Cards = [
  {
    title: "Standard Providers",
    subtitles: [
      { icon: true, category: "LinkedIn login" },
      { icon: true, category: "Password" },
      { icon: false, category: "Shared proxy" },
      { icon: false, category: "No 2FA access" },
      { icon: false, category: "Limited support" },
      { icon: false, category: "Manual setup" },
      { icon: false, category: "No replacements" },
      { icon: false, category: "No dashboard" },
    ],
  },
  {
    title: "Warmline",
    subtitles: [
      { icon: true, category: "Verified account" },
      { icon: true, category: "Secure credentials" },
      { icon: true, category: "Dedicated proxy" },
      { icon: true, category: "Live 2FA" },
      { icon: true, category: "Human support" },
      { icon: true, category: "Manual warm-up" },
      { icon: true, category: "Replacements" },
      { icon: true, category: "Dashboard access" },
    ],
  },
];

function WhyUs() {
  return (
    <>
      <div className="container-custom flex-col gap-16 max-md:gap-10 items-center">
        <BlockTitle
          title="Everything Included With Warmline."
          underTitle="Why us"
          subtitle="Renting a LinkedIn account is easy. Managing it reliably is what makes the difference."
          align="start"
          alignSub="end"
          maxWidthTitle="500px"
          maxWidthSubtitle="425px"
        />

        <div className="flex md:gap-4 self-stretch max-md:rounded-lg max-md:overflow-hidden">
          {Cards.map((card, i) => (
            <div
              key={i}
              className={`flex flex-1 flex-col overflow-hidden md:rounded-lg ${i === 0 ? "bg-[#F5F5F5] " : "bg-[#F2F7FF]"} `}
            >
              <div
                className={`py-8 px-10 flex max-md:p-4 max-md:h-18 max-md:items-center text-[#011020] font-bold text-2xl max-md:text-base
                  ${i === 0 ? "bg-[#0110200F]" : "bg-[#0975E21A]"}`}
              >
                {card.title}
              </div>
              {card.subtitles.map((cat, index) => (
                <div
                  key={index}
                  className={`py-5 gap-4 flex items-center px-10 border-[#0000001A]  max-md:p-4
                    ${index == card.subtitles.length - 1 ? "" : "border-b"}`}
                >
                  <div
                    className={`w-8 h-8 max-md:w-5 max-md:h-5 flex justify-center items-center rounded-full ${cat.icon ? "bg-[#0975E21A]" : "bg-[#0110200F]"}`}
                  >
                    <img
                      className="max-w-4 h-4 max-md:max-w-2.5 max-md:h-2.5"
                      src={cat.icon ? Check : Cross}
                    />
                  </div>
                  <div className="font-geist text-lg max-md:text-xs text-[#011020CC]">
                    {cat.category}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhyUs;
