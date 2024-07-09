import { segments } from "@/interfaces";
import React from "react";
import "./SegmentSelector.styles.scss";
export const SegmentSelector = ({
  options,
  handleSelectSegment,
  selectedOption,
}: {
  options: string[];
  handleSelectSegment: (value: segments) => void;
  selectedOption: string;
}) => {
  return (
    <>
      <div className="segment_selector_container">
        <span className="segment_selector_span">Filtrar por</span>
        <button
          className={
            selectedOption === ""
              ? "segment_selector_selected_button"
              : "segment_selector_button"
          }
          onClick={() => handleSelectSegment("")}
        >
          Todos
        </button>
        {options.map((option) => (
          <button
            key={option}
            className={
              selectedOption === option
                ? "segment_selector_selected_button"
                : "segment_selector_button"
            }
            onClick={() => handleSelectSegment(option as segments)}
          >
            {option}
          </button>
        ))}
      </div>
      <select
        className="segment_selector_mobile"
        onChange={(e) => handleSelectSegment(e.target.value as segments)}
      >
        <option hidden selected>
          Ordenar por
        </option>
        <option value="">Todos</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
