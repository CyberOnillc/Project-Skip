import React, { ReactNode, useState } from "react";

interface SidebarProps {
    children: ReactNode;
    isOpen: Boolean;
    setIsSideBarOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ children, isOpen,setIsSideBarOpen }) => {

  return (
    <div>
      {/* Button to open the sidebar */}
      <button onClick={() => setIsSideBarOpen(true)}>Open Sidebar</button>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full">
          <button
            className="absolute right-4 top-4 z-10 "
            onClick={() => setIsSideBarOpen(false)}
          >
            ×
          </button>
          {/* Sidebar content */}
          <div className="p-4">{children}</div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
    </div>
  );
};

export default Sidebar;
