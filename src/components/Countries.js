import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Country from "./Country";

import "../styles/Countries.css";

function Countries() {
    const [countries, setCountries] = React.useState([]);
    if (!countries.length) {
        axios.get("http://api.countrylayer.com/v2/all?access_key=6239c1498839036eef66dada4194804c").then(res => {
            console.log("Countries:", res);
            setCountries(res.data);
        })
    }

    return (
        <Table striped bordered hover className={"countries"}>
            <thead><tr>
                <th>Code</th>
                <th>Name</th>
                <th>Capital</th>
                <th></th>
            </tr></thead>
            <tbody>
                {countries.map(country => <Country key={country.alpha3Code} country={country} />)}
            </tbody>
        </Table>
    );
}

export default Countries;