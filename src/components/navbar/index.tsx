import React from "react";
import { ActiveLink } from "../activeLink";

const navItems = [
  { path: "/personal-data", text: "Mis datos" },
  { path: "/task-list", text: "Mis tareas" },
  { path: "/personal-returns", text: "Mis devoluciones" },
];

export const Navbar = () => {
  return (
    <nav className="border-t mt-4">
      <div className="container mx-auto flex justify-center space-x-4">
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </div>
    </nav>
  );
};
