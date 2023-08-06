import "./SnacksTable.css";
import React, { useContext } from "react";
import { SnacksContext } from "../context/snacksContext";

import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";

export const SnacksTable = () => {
  const {
    sort,
    sortTable,
    setSearchedValue,
    filteredSnacks,
    searchedValue
  } = useContext(SnacksContext);

  return (
    <section>
      <h2>
        Snacks Table{" "}
        {sort.direction === "ascending" ? (
          <AiFillCaretDown />
        ) : (
          <AiOutlineCaretUp />
        )}
      </h2>

      <div className="search-box">
        <input
          type="text"
          value={searchedValue}
          placeholder="search snacks here.."
          onChange={(e) => setSearchedValue(e.target.value)}
        />
      </div>

      <table className="snacks-table">
        <thead>
          <tr>
            <th onClick={() => sortTable("id")}>ID</th>
            <th onClick={() => sortTable("product_name")}>Product Name</th>
            <th onClick={() => sortTable("product_weight")}>Product Weight </th>
            <th onClick={() => sortTable("price")}>Price</th>
            <th onClick={() => sortTable("calories")}>Calories</th>
            <th onClick={() => sortTable("ingredients")}>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {filteredSnacks.map(
            ({
              id,
              product_name,
              product_weight,
              price,
              calories,
              ingredients
            }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{product_name}</td>
                <td>{product_weight}</td>
                <td>{price}</td>
                <td>{calories}</td>
                <td>{ingredients.join(", ")}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};
