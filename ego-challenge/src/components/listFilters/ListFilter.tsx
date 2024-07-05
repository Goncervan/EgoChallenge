import React from "react";
export const ListFilter = ({
  options,
  onSelect,
  title,
}: {
  title: string;
  options: { name: string; value: string }[];
  onSelect: (value: string) => void;
}) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {options?.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};
