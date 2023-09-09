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
  const firstItemName =
    menuData.length > 0 ? menuData[0].MenuLinkName : "Dropdown";

  return (
    <div className="relative w-full text-left md:inline-block">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded bg-gray-100 p-2 md:space-x-2 md:rounded-none md:bg-transparent"
      >
        <span>{firstItemName}</span>
        <ChevronDown color="#2AAA94" size={16} />
      </button>
      {isOpen && (
        <div className="mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 md:absolute md:right-0 md:w-56">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Slice the array from the second item onward */}
            {menuData.slice(1).map((item, index) => (
              <a
                key={index}
                href={item.MenuLinkURL}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
