import Logo from "./assets/LogoActive.png";
import X from "./assets/footerX.png";
import Inb from "./assets/footerInb.png";

const navigation = [
  {
    title: "Services",
    groups: [
      { title: "LinkedIn Accounts", link: "" },
      { title: "Connections", link: "" },
      { title: "Likes", link: "" },
      { title: "Comments", link: "" },
      { title: "Followers", link: "" },
    ],
  },
  {
    title: "Company",
    groups: [
      { title: "Why Us", link: "" },
      { title: "How It Works", link: "" },
      { title: "FAQ", link: "" },
      { title: "Contact", link: "" },
    ],
  },
  {
    title: "Legal",
    groups: [
      { title: "Privacy Policy", link: "" },
      { title: "Terms of Service", link: "" },
    ],
  },
];

const Socials = [
  {
    icon: Inb,
    link: "",
  },
  {
    icon: X,
    link: "",
  },
];

function Footer() {
  return (
    <>
      <div className="pt-16 max-md:pt-10 px-4 max-md:px-0">
        <div className="bg-[#F5F5F5] rounded-t-xl p-16 flex flex-col gap-12 max-md:px-5 max-md:pt-12 max-md:pb-8">
          <div className="flex justify-between max-md:flex-col gap-10">
            <div className="w-40 h-auto">
              <img src={Logo} alt="Logo" />
            </div>

            <div className="flex gap-16 max-md:grid max-md:grid-cols-2 max-md:gap-10">
              {navigation.map((item, i) => (
                <div key={i} className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#01102099]" />
                    <div className="font-geistMono text-[#01102099] font-medium text-base">
                      {item.title}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {item.groups.map((navItem, index) => (
                      <div
                        key={index}
                        className="text-[#011020CC] font-geist font-medium text-base"
                      >
                        {navItem.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex gap-4 items-center">
              {Socials.map((item, i) => (
                <div key={i} className="w-6 h-6 max-md:w-5 max-md:h-5">
                  <img src={item.icon} />
                </div>
              ))}
            </div>

            <div className="text-[#01102080] font-geist font-medium text-base max-md:text-xs">
              © 2026 Warmline
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
