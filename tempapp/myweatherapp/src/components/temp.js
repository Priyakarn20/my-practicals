import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./css/style.css";
require('dotenv').config();

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune");

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={process.env.apikey}';
            const response = await axios.get(url);

            const resJson = await response();
           // console.log(response);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputfield"
                        onChange={(event) => { setSearch(event.target.value) }
                        } />
                </div>
                {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                ) : (
                    <>
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fa-solid fa-street-view"></i> {search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp}cel
                                </h1>
                                <h3 className="tempmin_max">
                                    Min :  {city.temp_min} Cel | Max : {city.temp_max} Cel</h3>
                            </div>
                        </div><div className="wave -one"></div><div className="wave -two"></div><div className="wave -three"></div></>

                )}
            </div>
        </>



    )
}

export default Tempapp;