// use client

import { FC } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  menuData: {
    MenuLinkName: string;
    MenuLinkURL: string;
  }[];
  isOpen: boolean;
  onToggle: () => void;
}

const DropdownMenu: FC<DropdownProps> = ({ menuData, isOpen, onToggle }) => {
  // #```
  // # Use the MenuLinkName of the first item as the button text
  // #```
  const firstItemName =
    menuData.length > 0 ? menuData[0].MenuLinkName : "Dropdown";

  return (
    <div className="relative inline-block text-left">
      <button onClick={onToggle} className="flex items-center space-x-2">
        <span>{firstItemName}</span>
        <ChevronDown color="#2AAA94" size={16} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menuData.map((item, index) => (
              <a
                key={index}
                href={item.MenuLinkURL}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {item.MenuLinkName}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
