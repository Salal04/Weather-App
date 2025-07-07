import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SearchBar(){

    const [search , setSearch] = useState('');
    const navigate = useNavigate();

    function searchIt()
    {
        navigate(`/search/${search}`);
    }

    return (
        <div className="text-white m-3">

            <input 
                type="text"
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                placeholder="Search cities"
                className="w-8/12 m-3 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
            />

            <button 
                onClick={searchIt}
                className="font-semibold border bg-blue-950 shadow-md  px-5  py-2 rounded-full hover:shadow-lg hover:bg-blue-900 hover:shadow-blue-800 transition duration-300 ease-in-out">
                    
                    Search
            </button>


        </div>
    )

}

export default SearchBar;