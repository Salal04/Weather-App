import React, { useEffect, useState } from "react";
import prayImage from "../assets/prayer.jpg"
import prayImage2 from "../assets/prayer2.jpg"
import sun from "../assets/sunrise.jpeg"
import DisplayTime from "./time";


function PrayerTiming()
{
    const [Prayers , setPrayers] = useState('');
    const [location , setLocation] = useState('');
    const today = new Date();
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            

            fetch(`https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=1&month=${today.getMonth()}&year=${today.getFullYear()}`)
            .then(data=>data.json())
            .then(data => setPrayers(data));

    })})

    function convertToAmPm(timeString) {
        const [hourStr, minute] = timeString.split(":");
        let hour = parseInt(hourStr);
      
        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
      
        return `${hour}:${minute.split(' ')[0]} ${ampm} (PKT)`;
      }


    if(!(Prayers))
    {
        return (
            <div className="w-full h-full">Network issue</div>
        )
    }
    return(

        <div className="w-full h-full box-border lg:overflow-y-scroll p-2 lg:scrollbar-thin lg:scrollbar-thumb-gray-600 lg:scrollbar-track-gray-800">
            <div className="fixed top-0 right-0 px-10 py-1 hidden md:block">
                            <DisplayTime/>
            </div>
            <div className="flex flex-col text-white text-xl">
                <p className="mx-5 text-start font-mono font-bold">{Prayers.data[0].meta.timezone} Sun Information</p>
                <div className="flex lg:flex-row flex-wrap">
                    <PrayersCard name = {'Sun Rising'} img = {sun} time= {convertToAmPm(Prayers.data[today.getDate() - 1].timings.Sunrise)}/>
                    <PrayersCard name = {'Sun Set'} img = {sun} time= {convertToAmPm(Prayers.data[today.getDate() - 1].timings.Sunset)}/>
                </div>
            </div>
            <div className="flex flex-wrap flex-col text-white">
                <p className="mx-5 text-start block text-xl  font-mono font-bold"> Prayer Timings</p>
                <div className="flex lg:flex-row flex-wrap">
                    <PrayersCard name = {'Fajr Prayer'} img = {prayImage} time= {(convertToAmPm(Prayers.data[today.getDate() - 1].timings.Fajr))}/>
                    <PrayersCard name = {'Dhuhr Prayer'} img = {prayImage} time= {convertToAmPm(Prayers.data[today.getDate() - 1].timings.Dhuhr)}/>
                    <PrayersCard name = {'Asr Prayer'} img = {prayImage} time= {convertToAmPm(Prayers.data[today.getDate() - 1].timings.Asr)}/>
                    <PrayersCard name = {'Maghrib Prayer'} img = {prayImage2} time= {convertToAmPm(Prayers.data[today.getDate() - 1].timings.Maghrib)}/>
                    <PrayersCard name = {'Isha Prayer'} img = {prayImage2} time= {convertToAmPm(Prayers.data[today.getDate() - 1].timings.Isha)}/>
                </div>
            </div>
            <div className="flex flex-wrap flex-col text-white">
                <p className="mx-5 text-start block text-xl  font-mono font-bold">Complete Month Timings</p>
                <div className="lg:flex-row flex-wrap my-5 hidden md:flex">

                    <table className="text-center border-separate border-spacing-y-2  ">
                        <thead className="bg-red-900">
                            <tr className=" ">
                                <td className="w-56 h-auto  py-2 ">Date</td>
                                <td className="w-56 h-auto  py-2 ">Day</td>
                                <td className="w-56 h-auto  py-2 ">Fajr</td>
                                <td className="w-56 h-auto  py-2 ">Dhuhr</td>
                                <td className="w-56 h-auto  py-2 ">Asr</td>
                                <td className="w-56 h-auto  py-2 ">Maghrib</td>
                                <td className="w-56 h-auto  py-2 ">Isha</td>
                            </tr>
                        </thead>
                        <tbody>
                        {

                            Prayers.data.map((p , i)=>(
                                <AllMonthTable mon = {p}/>
                             ) )
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
    
}


function PrayersCard(props)
{
    function convertToAmPm(timeString) {
        const [hourStr, minute] = timeString.split(":");
        let hour = parseInt(hourStr);
      
        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
      
        return `${hour}:${minute.split(' ')[0]} ${ampm} (PKT)`;
      }

      
    return (
        <div className=" text-white box-border rounded flex w-fit my-5 mx-2 lg:py-5 px-4 overflow-hidden justify-center items-center  shadow-lg shadow-black flex-col">
            <p className="my-2 text-lg">{props.name} </p>
            <img 
                src={props.img}
                className="h-36 w-48"
            />
            <p className="my-2 text-lg">{props.time}</p>
        </div >
    )
}

function AllMonthTable(props){

    function convertToAmPm(timeString) {
        const [hourStr, minute] = timeString.split(":");
        let hour = parseInt(hourStr);
      
        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
      
        return `${hour}:${minute.split(' ')[0]} ${ampm}`;
      }
    return(
            <tr className="bg-red-200 rounded-4xl text-red-950 hover:scale-105 hover:shadow hover:shadow-amber-100 hover:transition hover:duration-500">
                <td className="w-56 h-auto box-border  py-2">{props.mon.date.readable}</td>
                <td className="w-56 h-auto box-border  py-2">{props.mon.date.gregorian.weekday.en}</td>
                <td className="w-56 h-auto box-border  py-2">{convertToAmPm(props.mon.timings.Fajr)}</td>
                <td className="w-56 h-auto box-border  py-2">{convertToAmPm(props.mon.timings.Dhuhr)}</td>
                <td className="w-56 h-auto box-border  py-2">{convertToAmPm(props.mon.timings.Asr)}</td>
                <td className="w-56 h-auto box-border  py-2">{convertToAmPm(props.mon.timings.Maghrib)}</td>
                <td className="w-56 h-auto box-border  py-2">{convertToAmPm(props.mon.timings.Isha)}</td>
            </tr>


    )
}

export default PrayerTiming;