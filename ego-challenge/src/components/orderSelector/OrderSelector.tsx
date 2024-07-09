import React from "react";
import "./OrderSelector.styles.scss";
export const OrderSelector = ({
  options,
  handleSelectOrder,
}: {
  options: { value: string; label: string }[];
  handleSelectOrder: (value: string) => void;
}) => {
  return (
    <select
      className="order_selector"
      onChange={(e) => handleSelectOrder(e.target.value as string)}
    >
      <option hidden selected>
        Ordenar por
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
