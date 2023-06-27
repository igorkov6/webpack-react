import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Country from "./Country";

import "../styles/Countries.css";
import CountriesList from "./countries-list"

function Countries() {
    const [countries, setCountries] = React.useState(CountriesList);

    return (
        <Table striped bordered hover className={"countries"}>
            <thead><tr>
                <th>Code</th>
                <th>Name</th>
                <th></th>
            </tr></thead>
            <tbody>
                {countries.map(country => <Country key={country.alpha3Code} country={country} />)}
            </tbody>
        </Table>
    );
}

export default Countries;