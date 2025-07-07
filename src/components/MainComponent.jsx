import React from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar";

function Main()
{
    return(
        <div className='flex lg:h-screen w-screen bg-[#0b121e] flex-col lg:flex-row '>
            
            <div className='flex justify-center sticky top-0 bg-[#0b121e] w-full lg:static lg:w-1/12'>
                <Navbar/>
            </div>
            
            <div className='w-11/12  lg:h-fill bg-[#0b121e]'>
                <Outlet  />
            </div>
        </div>
    )
}


export default Main;