import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCloud,
    faCloudRain,
    faSun,
    faSmog,
    faWind
} from "@fortawesome/free-solid-svg-icons"

function WeatherImage({weatherType}) {
    switch(weatherType) {
        case 'clear sky':
            return <FontAwesomeIcon icon={faSun} />;
        case 'light rain':
            return <FontAwesomeIcon icon={faCloudRain} />;
        case 'overcast clouds':
            return <FontAwesomeIcon icon={faSmog} />;
        case 'few clouds':
        case 'scattered clouds':
            return <FontAwesomeIcon icon={faCloud} />;
        default:
            return <></>;
    }
}

export default WeatherImage;