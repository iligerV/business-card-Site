import React from 'react';
import { Link } from "react-router-dom";

class MainContainer extends React.Component {
    render () {
        return (
            <div>
                <h1>Главная</h1>
                <div>
                    <ul>
                        <li>
                            <Link to={`/additional`}>Второстепенная</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainContainer;