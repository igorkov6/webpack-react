import React from "react";
import Button from "react-bootstrap/Button";

import "../styles/Country.css"

function Country(props) {

    const [selected, changeSelected] = React.useState(false);


    return (
        <tr className={selected ? "selected-country" : ""}>
            <td>{props.country.code}</td>
            <td>{props.country.name}</td>
            <td>
                <Button variant="success" onClick={() => {
                    changeSelected(true);
                    console.log(selected);}
                }
                    >Add</Button>
            </td>
        </tr>
    );
}

export default Country;
