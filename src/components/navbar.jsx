import React, { useEffect } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";

function Navbar()
{
    return (
        <div className=" m-2 flex p-4 box-border h-fill w-full lg:w-auto lg:flex-col bg-gray-800 shadow  items-center rounded-2xl text-white">
            
            <div  className="lg:h-1/6 sm:w-1/6 lg:w-auto ">             
                <svg className="size-12 bg-blue-900 shadow-2xl shadow-black p-2  rounded-2xl icon icon-tabler icons-tabler-outline icon-tabler-wind"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" /><path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" /><path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" /></svg>
            </div>
            <div  className="lg:my-5 lg:mx-0 flex justify-center items-center flex-col">
                <NavLink to="/Weather"  className={({ isActive })=>isActive?('bg-[#0b121e] scale-90 p-1 shadow-lg shadow-black flex flex-col justify-center items-center'):('flex flex-col justify-center items-center')}>
                    <svg  className="text-white" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /><path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" /><path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" /><path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" /><path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" /><path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /><path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /></svg>
                    <p>Weather</p>
                </NavLink>
            </div>
            <div className="lg:my-5 lg:mx-0  flex justify-center items-center flex-col">
                <NavLink to="/search" className={({ isActive })=>isActive?('bg-[#0b121e] scale-95 p-1 shadow-lg shadow-black flex flex-col justify-center items-center'):('flex flex-col justify-center items-center')}>
                    <svg className="text-white"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-community"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" /><path d="M13 7l0 .01" /><path d="M17 7l0 .01" /><path d="M17 11l0 .01" /><path d="M17 15l0 .01" /></svg>
                    <p>Cities</p>
                </NavLink>
            </div>
            <div  className="lg:my-5 lg:mx-0 flex justify-center items-center flex-col">
                <NavLink to="/Prayer" className={({ isActive })=>isActive?('bg-[#0b121e] p-1 shadow-lg shadow-black flex flex-col justify-center items-center'):('flex flex-col justify-center items-center')}>
                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><path d="M9 4v13" /><path d="M15 7v13" /></svg>
                    <p>Prayer</p>
                </NavLink>
            </div>
                     
        </div>
    )
}

export default Navbar