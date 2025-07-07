import React from "react";


function WeatherCard(props)
{
    return (

        <div className="grid grid-cols-2 grid-rows-2 w-full box-border h-full text-white p-3">
            
            <div className="flex flex-col ms-5">
                <h1 className="text-5xl font-mono">{props.w.name}<br/></h1>
                <h1 className="text-xl text-gray-600 font-mono ">Weather:{props.w.weather[0].description}</h1>
            </div>
            <div className="flex justify-center items-center gap-1 row-span-2">
                <img
                    className="w-4/6"
                    src={`https://openweathermap.org/img/wn/${props.w.weather[0].icon}@2x.png`}
                    alt={props.w.description}
                />
            </div>
            <div className="m-3">
                <h1 className="text-5xl ms-5 font-mono mt-5">{props.w.main.temp}°c </h1>

            </div>


        </div>
    )

}

export default WeatherCard