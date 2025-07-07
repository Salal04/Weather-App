import React, { useEffect, useState } from "react";
import WeatherCard from "./weather";
import FutureDaysData from "./Days7Forcast";
import SearchBar from "./searchBar";
import DisplayTime from "./time";
import DailyWeather from "./dailyWeather";
import {useParams} from "react-router-dom";

function SearchPage(){

    const params = useParams();
    const city   = params.city || 'Islamabad';
    console.log('this is the end ' + city)
    let apiKey = '179ddc678a7bbd4d0b45c6bcc641804e';
    const [WeatherData , setWeatherData] = useState();
    const [dailyData , setDailyData] = useState();
    const [futureData , setFutureData] = useState();
    useEffect(()=>{

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => setWeatherData(data));

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => setFutureData(data));

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                setDailyData(data);
            });

    },[city])
    if(!(WeatherData && dailyData&&futureData))
    {
        return <div>
            <p className="text-white m-5 text-4xl w-screen h-screen"> Record Not Found!</p>
        </div>
    }
    return (


    <div className="lg:h-screen box-border flex flex-col lg:grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-7 gap-1 sm:grid-cols-4">

        <div className="lg:col-span-12 lg:row-start-1 flex  ">
            <div className="lg:w-4/6 w-full">
                <SearchBar/>
            </div>
            <div className="mx-auto hidden md:block">
                <DisplayTime/>
            </div>
        </div>
        <div className=" lg:col-span-8 lg:row-span-3"> {WeatherData ? 
                        (
                            <WeatherCard w={WeatherData} />

                        ):      
                        (<p>location error</p>)
                }</div>
        <div className=" lg:col-span-4 order-last lg:row-span-6 lg:overflow-y-scroll lg:order-none">
           {futureData ? (<FutureDaysData w={futureData}/> ):(<p>Location Problem</p>) }
        </div>
        <div className=" lg:col-span-8 lg:row-span-3  rounded-4xl mx-3 p-2 ">
            {dailyData ?(<DailyWeather data = {dailyData}/>):(<p>Network Issue</p>)}
        </div>

    </div>
    )

   
}

export default SearchPage;