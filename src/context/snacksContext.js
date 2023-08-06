import { createContext, useState } from "react";
import { snacks } from "../data/snacksData";

export const SnacksContext = createContext();

export const SnacksContextProvider = ({ children }) => {
  const [searchedValue, setSearchedValue] = useState();

  const [sort, setSort] = useState({
    key: "",
    direction: "ascending"
  });

  const filteredSnacks = searchedValue
    ? snacks.filter(({ product_name }) =>
        product_name.toLowerCase().includes(searchedValue.toLowerCase())
      )
    : snacks;

  const sortTable = (key) => {
    let direction = "ascending";
    if (sort.key === key && sort.direction === "ascending") {
      direction = "descending";
    }
    setSort({ key, direction });
  };

  const sortedSnacks = filteredSnacks.sort((a, b) => {
    const aValue =
      sort?.key === "product_weight" ? parseFloat(a[sort?.key]) : a[sort?.key];
    const bValue =
      sort?.key === "product_weight" ? parseFloat(b[sort?.key]) : b[sort?.key];

    if (sort.direction === "ascending") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const value = {
    sortTable,
    sortedSnacks,
    setSearchedValue,
    filteredSnacks,
    sort
  };

  return (
    <SnacksContext.Provider value={value}>{children}</SnacksContext.Provider>
  );
};
