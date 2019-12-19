import React from 'react';
import { Link } from "react-router-dom";

export default class Menu extends React.Component {

    render() {
        return (
            <div>
                <p><Link to="/table">Table</Link></p>
                <p><Link to="/chart">Chart</Link></p>
            </div>
        );
    }

}
