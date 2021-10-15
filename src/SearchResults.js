import React from "react";
import SearchResultsHeader from "./SearchResultsHeader";
import moment from "moment";
import { useState } from "react";

function SearchResults(props) {
  const [rowSelected, setRowSelected] = useState(null);
  function handleClick(index) {
    setRowSelected(index);
  }
  return (
    <table className="table table-responsive text-left">
      <SearchResultsHeader />
      <tbody>
        {props.results.map((customer, index) => {
          return (
            <tr
              key={index}
              onClick={() => handleClick(index)}
              className={index === rowSelected ? "bg-success" : ""}
            >
              <th scope="col">{customer.id}</th>
              <th scope="col">{customer.title}</th>
              <th scope="col">{customer.firstName}</th>
              <th scope="col">{customer.surname}</th>
              <th scope="col">{customer.email}</th>
              <th scope="col">{customer.roomId}</th>
              <th scope="col">{customer.checkInDate}</th>
              <th scope="col">{customer.checkOutDate}</th>
              <th scope="col">
                {moment(customer.checkOutDate).diff(
                  moment(customer.checkInDate),
                  "days"
                ) + " nights"}
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
