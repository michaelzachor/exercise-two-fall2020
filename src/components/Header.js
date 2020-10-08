import React from 'react';

function Header() {
    return (
        <header className = "Header">
            <div>
                <h1>Weather App</h1>
            </div>
            <nav>
                <a href="/?city=Brooklyn">Brooklyn</a>
                <a href="/?city=Chicago">Chicago</a>
                <a href="/?city=Trenton">Trenton</a>
                <a href="/?city=Warsaw">Warsaw</a>
                <a href="/?city=Fes">Fes</a>
            </nav>
        </header>
    );
}

export default Header;