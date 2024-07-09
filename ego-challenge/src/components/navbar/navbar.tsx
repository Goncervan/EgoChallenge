"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./navbar.styles.scss";
import { EgoIcon } from "../icons/EgoIcon";
import { usePathname } from "next/navigation";
import { MenuIcon } from "../icons/MenuIcon";
import { Menu } from "../menu/Menu";
export const Navbar = ({activeCarId}:{activeCarId?:number}) => {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <nav className="nav">
      <div className="left_container">
        <EgoIcon />
        <div className="links_container">
          <Link className={pathname === "/" ? "active_link" : "nav_link"} href="/">
            Modelos
          </Link>
          <Link
            className={
              pathname?.includes("/car-detail") ? "active_link" : "nav_link"
            }
            href={activeCarId ? `/car-detail/${activeCarId}` : pathname ?? "/"}
          >
            Ficha de modelo
          </Link>
        </div>
      </div>
      <button className="menu" onClick={toggleModal}>
        Menú <MenuIcon />
      </button>
      <Menu isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
};
