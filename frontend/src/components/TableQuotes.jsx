import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export function TableQuotes() {
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    axios.get('https://wetbat-challenge.herokuapp.com/api/select')
      .then((response) => {
        setQuotesList(response.data);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">From</th>
          <th scope="col">Destination</th>
          <th scope="col">Departure Date</th>
          <th scope="col">Reture Date</th>
          <th scope="col">Peoples</th>
          <th scope="col">Transportation</th>
        </tr>
      </thead>
      <tbody>
        {quotesList.map((quote, index) => {
          return (
            <tr key={index}>
              <th scope="row">{quote.idquotes}</th>
              <td>{quote.clientName}</td>
              <td>{quote.clientPhone}</td>
              <td>{quote.fromDeparture}</td>
              <td>{quote.destination}</td>
              <td>{quote.departureDate}</td>
              <td>{quote.retureDate}</td>
              <td>{quote.numberOfPeoples}</td>
              <td>{quote.transportation}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};