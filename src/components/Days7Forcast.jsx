import React from "react";

function FutureDaysData(props)
{
    let old;
    const now     = new Date();
    let hours = now.getHours();
    hours -= (hours%3)
    
    props.w.list.sort((p,i)=>p.dt-i.dt)
    return (
        <div className="flex flex-col">
            {props.w.list.map((p,i)=>(

                hours = (hours+3)%24,
                
                (<EachDay we={p} h ={hours}/>)             
            ))}
        </div>
    ) 
}

function EachDay(props)
{
    const dateObj = new Date(props.we.dt * 1000);
    const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    return (
        <div className="flex p-2 text-white rounded-full shadow-2xl justify-center flex-wrap items-center">
            <p className="px-5">{weekday}</p>
            <div className="px-2">
                <p>{props.we.weather[0].main} </p>
                <p> {props.h === 0 ? (12):(props.h)}:00</p>
            </div>

            <img
                    src={`https://openweathermap.org/img/wn/${props.we.weather[0].icon}@2x.png`}
                    alt={props.we.description}
                />

            <div>
                <p>{props.we.main.temp}</p>
                
            </div>
        </div>
    )
}


export default FutureDaysData;