"use client";
import { FC,useState,useEffect,useRef } from "react";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { ShoppingCart, User, Search } from "lucide-react";
import DropdownMenu from "../shared/dropdown";

interface NavBarProps {
  session: Session | null;
}

const menuItemsArray = [
  [
    { MenuLinkName: "Home", MenuLinkURL: "/" },
    { MenuLinkName: "Courses1", MenuLinkURL: "/courses1" },
  ],
  [
    { MenuLinkName: "Courses", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  [
    { MenuLinkName: "Blog", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  [
    { MenuLinkName: "Shop", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  [
    { MenuLinkName: "Pages", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  [
    { MenuLinkName: "Events", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  // ... other menu items
];
// Dropdown menu items

const NavBar: FC<NavBarProps> = ({ session }) => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const navBarRef = useRef<HTMLElement>(null);

const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

const [isButtonClicked, setIsButtonClicked] = useState(false);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Element;
    if (!target.closest(".dropdown")) {
      if (!isButtonClicked) {
        setOpenDropdownIndex(null);
      } else {
        setIsButtonClicked(false);
      }
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isButtonClicked]);

  
const toggleDropdown = (index: number | null = null) => {
  setIsButtonClicked(true);
  setOpenDropdownIndex(openDropdownIndex === index ? null : index);
};
  return (
    <>
      <SignInModal />
      <nav
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 p-4 transition-all`}
      >
        <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Project Skip logo"
                className="mr-2 h-8 w-8 rounded-sm"
              />
            </Link>
            <span>Project Skip</span>
          </div>
          <div className="flex justify-center space-x-4">
            {menuItemsArray.map((menuItems, index) => (
              <DropdownMenu
                key={index}
                menuData={menuItems}
                isOpen={openDropdownIndex === index}
                onToggle={() => toggleDropdown(index)}
              />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingCart />
            <User />
            <Search />
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <>
                <button
                  className="rounded bg-blue-500 px-4 py-2 text-white"
                  onClick={() => setShowSignInModal(true)}
                >
                  Login
                </button>
                <button
                  className="rounded bg-slate-950 px-4 py-2 text-white"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;