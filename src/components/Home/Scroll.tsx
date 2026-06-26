import Brutalism from "../../assets/Brutalism.png";

const Cards = [
  {
    icon: Brutalism,
    title: "Verified",
  },
  {
    icon: Brutalism,
    title: "Secure",
  },
  {
    icon: Brutalism,
    title: "Verified",
  },
  {
    icon: Brutalism,
    title: "Secure",
  },
];

const loopedCards = [...Cards, ...Cards, ...Cards];

function Scroll() {
  return (
    <>
      <div className="container-custom overflow-hidden">
        <div className="animate-scroll flex gap-16">
          {loopedCards.map((card, i) => (
            <div key={i} className="flex gap-16">
              <div className="w-16 h-16 max-md:w-9 max-md:h-9">
                <img src={card.icon} />
              </div>
              <div className="text-6xl font-bold text-[#011020] max-md:text-3xl">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Scroll;
