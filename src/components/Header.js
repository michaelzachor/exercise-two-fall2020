import React from 'react';

function Header() {
    return (
        <header className = "Header">
            <div>
                <h1>Weather App</h1>
            </div>
            <nav>
                <a href="#">Seoul</a>
                <a href="#">Chicago</a>
                <a href="#">Toronto</a>
                <a href="#">Shanghai</a>
            </nav>
        </header>
    );
}

export default Header;