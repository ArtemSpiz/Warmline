import Logo from "./assets/Logo.png";
import LogoActive from "./assets/LogoActive.png";
import CustomButton from "./ui/CustomButton";
import { useState, useEffect, useRef } from "react";
import DownArrow from "./ui/DownArrow";
import Icon from "./assets/Icon1.png";
import Burger from "./assets/burger.png";
import Close from "./assets/closeBurger.png";

type NavItem = {
  title: string;
  url: string;
  icon?: string;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

type NavLink =
  | {
      type: "dropdown";
      title: string;
      groups: NavGroup[];
    }
  | {
      type: "link";
      title: string;
      url: string;
    };

const navigation: NavLink[] = [
  {
    type: "dropdown",
    title: "Services",
    groups: [
      {
        title: "LinkedIn",
        items: [
          { title: "Rent LinkedIn Accounts", icon: Icon, url: "" },
          { title: "Buy LinkedIn Connections", icon: Icon, url: "" },
          { title: "Buy LinkedIn Post Likes", icon: Icon, url: "" },
          { title: "Buy LinkedIn Post Comments", icon: Icon, url: "" },
          { title: "Buy LinkedIn Followers", icon: Icon, url: "" },
        ],
      },
      {
        title: "Reddit",
        items: [
          { title: "Rent Reddit Accounts", icon: Icon, url: "" },
          { title: "Buy Reddit Post Upvotes", icon: Icon, url: "" },
          { title: "Buy Reddit Post Comments", icon: Icon, url: "" },
        ],
      },
      {
        title: "X (Twitter)",
        items: [
          { title: "Rent X Accounts", icon: Icon, url: "" },
          { title: "Buy X Post Likes", icon: Icon, url: "" },
          { title: "Buy X Post Comments", icon: Icon, url: "" },
          { title: "Buy X Reposts", icon: Icon, url: "" },
        ],
      },
    ],
  },
  { type: "link", title: "How it works", url: "/" },
  { type: "link", title: "FAQ", url: "/" },
];

function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const isDropdownOpen = activeDropdown !== null;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const activeNav = navigation.find(
    (n) => n.type === "dropdown" && n.title === activeDropdown,
  );

  const servicesNav = navigation.find(
    (n) => n.type === "dropdown" && n.title === "Services",
  );

  return (
    <>
      {isDropdownOpen && <div className="fixed inset-0 h-screen bg-black/50" />}

      <div
        ref={headerRef}
        className={`absolute z-50 right-1/2 translate-x-1/2 w-full max-w-[1600px] flex flex-col rounded-b-xl duration-200 ${
          isDropdownOpen ? "bg-white shadow-xl" : "bg-transparent"
        }`}
      >
        {/* Header bar */}
        <div className="flex justify-between items-center px-16 max-xl:px-10 max-md:px-5 pt-6 pb-5">
          <div className="flex items-center gap-10 max-xl:gap-5">
            <div className="w-40 h-auto">
              <img
                src={isDropdownOpen || mobileOpen ? LogoActive : Logo}
                alt="Logo"
              />
            </div>

            {/* Desktop nav */}
            <nav className="flex items-center gap-1 max-lg:hidden">
              {navigation.map((item) => {
                if (item.type === "link") {
                  return (
                    <a
                      key={item.title}
                      href={item.url}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isDropdownOpen
                          ? "text-[#011020]"
                          : "text-white hover:text-white/80"
                      }`}
                    >
                      {item.title}
                    </a>
                  );
                }

                const isActive = activeDropdown === item.title;

                return (
                  <button
                    key={item.title}
                    onClick={() =>
                      setActiveDropdown(isActive ? null : item.title)
                    }
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isDropdownOpen
                        ? "text-[#011020]"
                        : "text-white hover:text-white/80"
                    }`}
                  >
                    {item.title}
                    <span
                      className={`transition-transform duration-300 ${
                        isActive ? "-rotate-180" : ""
                      }`}
                    >
                      <DownArrow fill={isActive ? "#011020" : "#fff"} />
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className={`font-bold text-sm max-md:text-xs uppercase tracking-wide transition-colors duration-200 max-lg:hidden ${
                isDropdownOpen ? "text-[#011020]" : "text-white"
              }`}
            >
              Log in
            </a>

            {/* Desktop CTA */}
            <div className="max-lg:hidden">
              <CustomButton
                text="Browse Marketplace"
                variant={isDropdownOpen ? "ghost" : "blue"}
              />
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a
                href="#"
                className={`font-bold text-sm uppercase tracking-wide transition-colors duration-200 ${
                  mobileOpen ? "hidden" : "text-white"
                }`}
              >
                Log in
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`w-11 h-11 flex items-center justify-center rounded-sm border ${
                  mobileOpen
                    ? "bg-[#F0F4F8] border-[#004B971A]"
                    : "bg-[#1968B8] border-[#3077BE]"
                }`}
              >
                <div className="w-5">
                  <img
                    src={mobileOpen ? Close : Burger}
                    alt="menu"
                    className="w-5 h-5"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {isDropdownOpen && activeNav?.type === "dropdown" && (
          <div className="grid grid-cols-3 gap-16 px-16 max-xl:px-10 max-md:px-5 py-8 max-lg:hidden">
            {activeNav.groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-1 min-w-50">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#01102080] mb-3">
                  {group.title}
                </span>
                {group.items.map((navItem) => (
                  <a
                    key={navItem.title}
                    href={navItem.url || "#"}
                    onClick={() => setActiveDropdown(null)}
                    className="group flex items-center justify-between gap-3 py-4 border-b border-[#01102026] px-0 text-sm text-[#011020CC] hover:text-blue-600 hover:border-blue-600 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 text-gray-400 group-hover:text-blue-500 flex-shrink-0">
                        {navItem.icon && (
                          <img src={navItem.icon} className="w-5 h-5" />
                        )}
                      </span>
                      {navItem.title}
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-300 group-hover:text-blue-400"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 12L12 4M12 4H6M12 4v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50">
          <div
            className="absolute inset-x-0 top-0 bg-white flex flex-col"
            style={{ maxHeight: "100dvh" }}
          >
            <div className="h-[88px] flex-shrink-0" />

            <div className="flex-1 overflow-y-auto px-5 pb-4">
              <div className=" ">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-4 border-b border-[#01102026] text-[#011020] text-base font-geist"
                >
                  <span>Services</span>
                  <span
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen ? "-rotate-180" : ""
                    }`}
                  >
                    <DownArrow fill="#011020" />
                  </span>
                </button>

                {mobileServicesOpen && servicesNav?.type === "dropdown" && (
                  <div className="pt-2 pb-2">
                    {servicesNav.groups.map((group) => (
                      <div key={group.title} className="mb-4">
                        <span className="block text-xs font-semibold uppercase tracking-widest text-[#01102080] py-3">
                          {group.title}
                        </span>
                        {group.items.map((navItem, i) => (
                          <a
                            key={navItem.title}
                            href={navItem.url || "#"}
                            onClick={() => setMobileOpen(false)}
                            className={`group flex items-center justify-between gap-3 py-3 text-sm text-[#011020CC] ${i === group.items.length - 1 ? "" : "border-b border-[#01102026]"}`}
                          >
                            <div className="flex items-center gap-3 text-[#011020CC]">
                              {navItem.icon && (
                                <div className="w-5">
                                  <img src={navItem.icon} />
                                </div>
                              )}
                              {navItem.title}
                            </div>
                            <svg
                              className="w-4 h-4 text-[#011020CC]"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 12L12 4M12 4H6M12 4v6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navigation
                .filter((n) => n.type === "link")
                .map((item, i) => (
                  <a
                    key={item.title}
                    href={(item as { type: "link"; url: string }).url}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-4 text-[#011020] text-base font-geist ${i === 1 ? "" : "border-b border-[#01102026]"}`}
                  >
                    {item.title}
                  </a>
                ))}
            </div>

            <div className="items-center px-5 pb-8 pt-4 flex flex-col gap-3">
              <CustomButton text="Browse Marketplace" variant="blue" />
              <a
                href="#"
                className="text-center font-bold text-sm uppercase tracking-wide text-[#011020]"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
