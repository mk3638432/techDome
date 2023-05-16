// "use client"
// import { useEffect, useState } from "react"
// import axios from 'axios'


// const Hero = () => {

//     const [show , setShow] = useState([])

//     useEffect(() => {
//         async function getData() {
//             const responsive = await axios.get("https://api.spacexdata.com/v3/launches?limit")
//             setShow(responsive.data)
//             console.log(responsive.data)
//         }
//        getData()
//     } ,[])
    

//     const filterYear = (catagory) => {
//        setShow( 
//         show.filter((element) => {
//      return element.launch_year === catagory
//         })
//        )
//     }



//   return (
    
//   )
// }

// export default Hero