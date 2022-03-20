import React, { useState, useEffect } from 'react';
import { FaHistory } from "react-icons/fa";
import { BoxTitle, Content1, DivTitle } from './QuickQuote.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export function LastQuotes() {
    const [lastQuotes, setLastQuotes] = useState([]);

    useEffect(() => {
        axios.get('https://wetbat-challenge.herokuapp.com/api/lasts')
            .then(response => {
                setLastQuotes(response.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <Content1>
            <DivTitle>
                <FaHistory style={{ color: "#5BBFBA" }} size={20} />
                <BoxTitle>Last quotes</BoxTitle>
            </DivTitle>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Destination</th>
                    </tr>
                </thead>
                <tbody>
                    {lastQuotes.map((quote, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{quote.idquotes}</th>
                                <td>{quote.clientName}</td>
                                <td>{quote.destination}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Content1>
    );
};