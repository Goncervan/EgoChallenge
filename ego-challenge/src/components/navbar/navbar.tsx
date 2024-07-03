'use client'
import Link from "next/link";
import React from "react";
import "./navbar.styles.scss";
import { EgoIcon } from "../icons/EgoIcon";
import { usePathname } from "next/navigation";
import { MenuIcon } from "../icons/MenuIcon";
export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <div className="left_container">
        <EgoIcon />
        <div className="links_container">
          <Link
            className={pathname === "/" ? "active_link" : "link"}
            href="/"
          >
            Modelos
          </Link>
          <Link
            className={pathname === "/model-detail" ? "active_link" : "link"}
            href="/model-detail"
          >
            Ficha de modelo
          </Link>
        </div>
      </div>
      <button className="menu">Menú <MenuIcon/></button>
    </nav>
  );
};
