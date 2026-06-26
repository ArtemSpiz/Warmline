import Bg from "../../assets/bgHero.png";
import CustomButton from "../../ui/CustomButton";
import IconCardHero1 from "../../assets/IconCardHero1.png";
import IconCardHero2 from "../../assets/IconCardHero2.png";

const HeroCards = [
  {
    icon: IconCardHero1,
    title: "Rent LinkedIn account",
  },
  {
    icon: IconCardHero2,
    title: "Post Engagement",
  },
  {
    icon: IconCardHero1,
    title: "Buy LinkedIn account",
  },
  {
    icon: IconCardHero2,
    title: "New connections",
  },
  {
    icon: IconCardHero1,
    title: "Rent LinkedIn account 2",
  },
];

const loopedCards = [...HeroCards, ...HeroCards];

function Hero() {
  return (
    <div
      className="bg-[#0156AC] bg-cover bg-center pt-40 max-md:pt-30 pb-15  flex flex-col gap-10"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="flex flex-col gap-8 max-md:gap-6 px-16 max-xl:px-10 max-md:px-5">
        <div className="text-white flex flex-col font-bold text-6xl max-xl:text-5xl max-md:text-4xl">
          Run more outbound. <span>Manage less infrastructure.</span>
        </div>
        <div className="subtitle text-[#FFFFFFCC] max-w-187 ">
          Rent or buy warmed LinkedIn accounts, manage credentials, proxies,
          billing, and replacements from a single workspace built for outbound
          teams.
        </div>

        <div className="flex gap-4 max-md:gap-2 max-md:flex-col w-full">
          <CustomButton text="Browse Marketplace" />
          <CustomButton text="See How It Works" variant="blue" />
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden px-16  max-xl:px-10 max-md:px-5">
        <div className="flex gap-4 animate-scroll">
          {loopedCards.map((card, i) => (
            <div
              key={i}
              className="p-6 bg-[#01316257] flex flex-col justify-between rounded-md shadow-md h-65 w-78 max-md:h-55 max-md:w-66"
            >
              <div className="w-28 max-md:w-20 h-auto">
                <img src={card.icon} />
              </div>
              <div className="text-xl font-geistMono text-white max-md:text-lg">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
