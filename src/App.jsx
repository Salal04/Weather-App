import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/navbar'
import Navbar from './components/navbar'
import MainBody from './components/main'
import WeatherCard from './components/weather'
import PrayerTiming from './components/Prayers'
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from './components/MainComponent'
import SearchBar from './components/searchBar'
import SearchPage from './components/searchPage'


const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children:[
        {
            path:'Weather',
            element: <MainBody/>
        },
        {
            path:'search/:city',
            element: <SearchPage/>
        },
        {
          path: "/search",
          element: <SearchPage />
        },
        {
            path:'Prayer',
            element: <PrayerTiming/>
        },

      ]

    }
])

function App() {
  const [count, setCount] = useState(0)

  return (
        <RouterProvider router={router} />
  )
}

export default App
