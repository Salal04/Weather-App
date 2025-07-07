
import React, { useEffect, useState } from "react";


function DisplayTime()
{
    const [time , setTime] = useState('');
    useEffect(() => {
        const pad = (n) => n.toString().padStart(2, "0");
    
        const updateClock = () => {
          const now     = new Date();
          const hours   = pad(now.getHours());
          const minutes = pad(now.getMinutes());
          const seconds = pad(now.getSeconds());
    
          setTime(`${hours}:${minutes}:${seconds}`);
        };
    
        updateClock();
        const intervalId = setInterval(updateClock, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

    return (

        <div className="px-7 py-2 text-amber-100  m-3 rounded-full flex justify-center items-center bg-gray-800">
            <p className="font-semibold text-4xl">{time}</p>
        </div>
    )
}

export default DisplayTime;