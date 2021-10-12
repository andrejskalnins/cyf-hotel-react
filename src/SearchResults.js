import React from "react";
import SearchResultsHeader from "./SearchResultsHeader";

function SearchResults(props) {
  return (
    <table className="table table-responsive text-left">
      <SearchResultsHeader />
      <tbody>
        {props.results.map((customer, index) => {
          return (
            <tr key={index}>
              <th scope="col">{customer.id}</th>
              <th scope="col">{customer.title}</th>
              <th scope="col">{customer.firstName}</th>
              <th scope="col">{customer.surname}</th>
              <th scope="col">{customer.email}</th>
              <th scope="col">{customer.roomId}</th>
              <th scope="col">{customer.checkInDate}</th>
              <th scope="col">{customer.checkOutDate}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
