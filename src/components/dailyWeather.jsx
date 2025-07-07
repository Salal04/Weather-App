import React  from "react";

function DailyWeather(props){

    return (
        <div className=" grid grid-rows-[1fr_6fr] h-full">
            <div className=" text-white mx-6" >Today's Forecast</div>
            <div className=" text-white h-full flex gap-1 overflow-hidden flex-wrap lg:flex-nowrap">
                {props.data.list.slice(0,7).map((p,i)=>(
                    <WeatherCard times = {new Date(p.dt * 1000)
                        .toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })} temp={p.main.temp}  icon={p.weather[0].icon}/>
                ))}

            </div>

        </div>
    )

}

function WeatherCard(props){

    return (

        <div className=" flex w-fit my-5 mx-2 lg:py-0 py-5  px-4 overflow-hidden justify-center items-center  shadow-lg shadow-black flex-col">
            <p >{props.times}</p>
            <img 
                src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            />
            <p>{props.temp}</p>
        </div>
    )   

}
export default DailyWeather;