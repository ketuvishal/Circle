import React from 'react';

const Score= (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/#">Score
                <span className="badge badge-pill badge-secondary">{props.value}</span>
            </a>
        </nav>   
    );
}
 
export default Score;