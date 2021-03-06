import { ChangeEvent } from "react";

import "./search-box.style.css";

type SearchBoxProps = {
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
