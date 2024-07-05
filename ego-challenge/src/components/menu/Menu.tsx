// components/Menu/Menu.tsx
import React from "react";
import "./Menu.styles.scss";
import { CloseIcon } from "../icons/CloseIcon";
import { EgoIcon } from "../icons/EgoIcon";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="menu_content" onClick={(e) => e.stopPropagation()}>
      <div className="menu_header">
        <EgoIcon />
        <button className="menu_close" onClick={onClose}>
          Close <CloseIcon />
        </button>
      </div>
      <div className="lists_container">
        <ul className="menu_list">
          <li>Modelos</li>
          <li>Servicios y Accesorios</li>
          <li>Financiación</li>
          <li>Reviews y Comunidad</li>
        </ul>
        <div className="divider" />
        <ul>
          <li>Toyota Mobility Service</li>
          <li>Toyota Gazoo Racing</li>
          <li>Toyota Híbridos</li>
        </ul>
        <div className="divider" />
        <ul>
          <li>Concesionarios</li>
          <li>Test Drive</li>
          <li>Contacto</li>
        </ul>
        <div className="divider" />
        <ul>
          <li>Actividades</li>
          <li>Servicios al Cliente</li>
          <li>Ventas Especiales</li>
          <li>Innovación</li>
          <li>Prensa</li>
          <li>Acerca de...</li>
        </ul>
      </div>
    </div>
  );
};
