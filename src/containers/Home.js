import React from 'react';

import Header from '../components/Header';

const weatherKey = `c60878fca060ccd07165aaf1f13d5ee8`;

function Home() {
// Displays:
// Weather Type (ex. Cloudy)
// Current Temperature
// High Temperature
// Low Temperature
// Cloudiness
// Humidity
// Wind Speed

    return (
        <>
            <Header />
            <main className="Home">
                <h3>Weather in Seoul</h3>
                <div className="WeatherInfo">
                    <p>Weather Type: Cloudy</p>
                    <p>Current Temperature: 100 Degrees</p>
                    <p>High Temperature: 100 Degrees</p>
                    <p>Low Temperature: 80 Degrees </p>
                    <p>Cloudiness: 100</p>
                    <p>Humidity: 35%</p>
                    <p>Wind Speed: 3 km/h</p>

                </div>
            </main>
        </>
        
    );
}

export default Home;