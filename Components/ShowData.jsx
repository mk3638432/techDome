"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ShowData = () => {

const [show , setShow] = useState([])

useEffect(() => {
    async function getData() {
        const responsive = await axios.get("https://api.spacexdata.com/v3/launches?limit")
        setShow(responsive.data)
        console.log(responsive.data)
    }
   getData()
} ,[])


const filterYear = (catagory) => {
    setShow( 
     show.filter((element) => {
  return element.launch_year === catagory
     })
    )
}



  return (
    <div className='h-screen sm:flex flex-row'>
            <div className="  sm:w-1/4 bg-gray-200/50 h-full">
        <h2 className="font-bold md:text-left text-center md:text-2xl">SpaceX Launch Programs</h2>
        <div className="md:w-[95%] w-full m-auto h-[85%] bg-white md:m-4">
        <h1 className='font-bold text-xl '>Filters</h1>
        <h1 className='underline text-center my-4'>Launch Year</h1>
        <div className=' grid gap-4 text-center grid-cols-2 cursor-pointer p-4'>
         <button onClick={() => filterYear("2006")} className='rounded border bg-green-200 hover:bg-green-800 '>2006</button>
         <button onClick={() => filterYear("2007")}  className='rounded border bg-green-200 hover:bg-green-800 '>2007</button>
         <button onClick={() =>filterYear("2008")}  className='rounded border bg-green-200 hover:bg-green-800 '>2008</button>
         <button onClick={() =>filterYear("2009")}  className='rounded border bg-green-200 hover:bg-green-800 '>2009</button>
         <button onClick={() =>filterYear("2010")}  className='rounded border bg-green-200 hover:bg-green-800 '>2010</button>
         <button onClick={() =>filterYear("2011")}  className='rounded border bg-green-200 hover:bg-green-800 '>2011</button>
         <button onClick={() =>filterYear("2012")}  className='rounded border bg-green-200 hover:bg-green-800 '>2012</button>
         <button onClick={() =>filterYear("2013")}  className='rounded border bg-green-200 hover:bg-green-800 '>2013</button>
         <button onClick={() =>filterYear("2014")}  className='rounded border bg-green-200 hover:bg-green-800 '>2014</button>
         <button onClick={() =>filterYear("2015")}  className='rounded border bg-green-200 hover:bg-green-800 '>2015</button>
         <button onClick={() =>filterYear("2016")}  className='rounded border bg-green-200 hover:bg-green-800 '>2016</button>
         <button onClick={() =>filterYear("2017")}  className='rounded border bg-green-200 hover:bg-green-800 '>2017</button>
         <button onClick={() =>filterYear("2018")}  className='rounded border bg-green-200 hover:bg-green-800 '>2018</button>
         <button onClick={() =>filterYear("2019")}  className='rounded border bg-green-200 hover:bg-green-800 '>2019</button>
         <button onClick={() =>filterYear("2020")}  className='rounded border bg-green-200 hover:bg-green-800 '>2020</button>
        </div>
       
            <h3 className="underline mt-2 text-center my-4">Successful Launch</h3>
            <div className="grid gap-4 text-center grid-cols-2 cursor-pointer">
            <button className="bg-green-200  hover:bg-green-800 ">True</button>
            <button className="bg-green-200  hover:bg-green-800 ">False</button>
        </div>
        <h3 className="underline mt-2 text-center my-4">Successful Landing</h3>
            <div className="grid gap-4 text-center grid-cols-2 cursor-pointer">
            <button className="bg-green-200  hover:bg-green-800 ">True</button>
            <button className="bg-green-200  hover:bg-green-800 ">False</button>
        </div>
        </div>

    </div>
        <div className='bg-gray-200/50 w-full  h-full'>
            <div className='lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 gap-2 flex flex-col justify-center items-center'> 
        {
                show.map((element , index) => {
                    return (
                        <div key={index}>
                            <div className='h-[500px] w-[300px] p-10 border m-4  bg-white'> 
                            <img className='border bg-gray-300/30' src={element.links.mission_patch_small} alt='/'/>
                            <div className='flex font-bold text-blue-400 py-2'> 
                            <h1> {element.mission_name} </h1>
                            <p> #{element.flight_number} </p>
                            </div>
                            <h1>{element.mission_id} </h1>
                            <h1 className='py-2'> <span className='font-bold'>Launch Year :</span> {element.launch_year} </h1> 
                            <h3 className='py-2'> <span className='font-bold'>Succesful Launch :</span> {element.launch_success} </h3>
                            <h2 className='py-2'> <span className='font-bold'>Succesful <br></br>Landing :</span>  {element.landing_intent} </h2>
                            </div>
                            </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default ShowData