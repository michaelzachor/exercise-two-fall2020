import React, { useState, useEffect, useMemo } from 'react';
//useState is current state of app
//useEffect - run certain code at a certain point of time
//useMemo - derive a value and store it as a var
import axios from 'axios';
//lets us make remote requests
//use it to make a get request to opeanWeatherAPI
//we make the request after the page loads b/c the page needs to be ready for us to make the request
//axios returns a promise (indication to code that there will be a future result)
//once we get that future result, we can respond via then or catch
import {useHistory } from 'react-router-dom';

import Header from '../components/Header';
import WeatherImage from '../components/WeatherImage';

const weatherKey = `c60878fca060ccd07165aaf1f13d5ee8`;

function Home() {
    const history = useHistory();
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Brooklyn');

    // const [updated, setUpdated] = useState(0);
    // useEffect(() => {
    //     setUpdated(updated + 1);
    //     setCity('Toronto');
    // }, []);
    // console.log('updated', updated);
    // console.log('updatedCount', updatedCount);
    //empty object inside the default prop
    // const [backgroundColor, setBackgroundColor] = useState(null);
    // const [city, setCity] = useState(null);
    useEffect(() => {
        axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherKey}`
            )
        .then(function (response) {
            //handle success
            const weather = response.data;
            setWeatherData(weather);
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        })
        // setBackgroundColor('#e5e5e5');
        // setCity("Seoul");
    }, [city]);

    useEffect(() => {
        const searchParams = history.location.search;
        const urlParams = new URLSearchParams(searchParams);
        const city = urlParams.get("city");
        if (city) {
            setCity(city);
        }
        console.log(city, "city");
        console.log("searchParams: ", urlParams)
    }, [history]);

    const { 
        cloudiness, 
        cloudinessValue,
        currentTemp, 
        currentTempValue,
        highTemp, 
        humidity, 
        lowTemp, 
        weatherType, 
        windSpeed,
    } = useMemo(() => {
        let cloudiness = '';
        let cloudinessValue;
        let currentTemp = '';
        let currentTempValue = '';
        let highTemp = '';
        let humidity = '';
        let lowTemp = '';
        let weatherType = '';
        let windSpeed = '';

        if(weatherData) {
            //if there is weatherData, deep dive for the info we want
            //if not, it's still null like we set it to above
            cloudiness = `${weatherData.clouds.all}%`;
            cloudinessValue = weatherData.clouds.all;
            currentTemp = `${Math.round(weatherData.main.temp)}°`;
            currentTempValue = Math.round(weatherData.main.temp);
            highTemp = `${Math.round(weatherData.main.temp_max)}°`;
            humidity = `${weatherData.main.humidity}%`;
            lowTemp = `${Math.round(weatherData.main.temp_min)}°`;
            weatherType = `${weatherData.weather[0].description}`
            windSpeed = `${weatherData.wind.speed}mph`;
        }
        return {
            cloudiness, 
            cloudinessValue,
            currentTemp, 
            currentTempValue,
            highTemp, 
            humidity, 
            lowTemp, 
            weatherType, 
            windSpeed,
        };
    }, [weatherData]);

    //new set state or use memo

    const backgroundColor = useMemo(() => {
        switch(true) {
            case currentTempValue > 80:
                return 'rgba(255, 77, 0, 1)'
            case currentTempValue > 60:
                return 'rgba(255, 191, 0, 1)'
            case currentTempValue > 40:
                return 'rgba(179, 231, 111, 1)'
            case currentTempValue <= 40:
                return 'rgba(136, 199, 255, 1)'
            default:
                return 'white'
        }
    }, [currentTempValue]);

    console.log("weatherData", weatherData);
    //when weatherData updates, update weatherType
    console.log('backgroundColor', backgroundColor);
    return (
        <>
            <Header />
            <main className="Home">
                <h2>Weather in <span>{city}</span></h2>
                <div className="WeatherInfo">
                    <div className="WeatherInfo_Basic" 
                         style={{ backgroundColor: backgroundColor}}>
                        <div className="WeatherInfo_Image">
                            <WeatherImage weatherType={weatherType} />
                        </div>
                        <p className="WeatherInfo_Type">{weatherType}</p>
                        <h3 className="Label">Current Temperature:</h3>
                        <p className="WeatherInfo_Temp">{currentTemp}</p>
                    </div>
                    <div className="WeatherInfo_Extra">
                        <div className="WeatherInfo_Extra_Column">
                            <h3 className="Label">High Temperature: </h3>
                            <p className="WeatherInfo_Temp_Small">{highTemp}</p>
                            <h3 className="Label">Low Temperature: </h3>
                            <p className="WeatherInfo_Temp_Small">{lowTemp}</p>
                        </div>
                        <div className="WeatherInfo_Extra_Column">
                            <h3 className="Label">Cloudiness: </h3>
                            <p className="WeatherInfo_Temp_Small">{cloudiness}</p>
                            <h3 className="Label">Humidity: </h3>
                            <p className="WeatherInfo_Temp_Small">{humidity}</p>
                            <h3 className="Label">Wind Speed: </h3>
                            <p className="WeatherInfo_Temp_Small">{windSpeed}</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
        
    );
}

export default Home;