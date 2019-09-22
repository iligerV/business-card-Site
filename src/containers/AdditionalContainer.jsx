import React from 'react';
import { Link } from "react-router-dom";

class AdditionalContainer extends React.Component {
    render () {
        return (
        <div>
            <h1>Второстепенная</h1>
            <div>
                <ul>
                    <li>
                        <Link to={`/`}>Главная</Link>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default AdditionalContainer;