import React , {useEffect, useState} from 'react'
import './main.css'
export default function Weather() {
    const [city, setCity] = useState(null); 
    const [search, setSearch] = useState("mumbai"); 
    const onChange = (event)=>{setSearch(event.target.value)}
    useEffect(()=>{
        const  getData= async ()=>{
            let url = `https://api.weatherapi.com/v1/current.json?key=f7919c8ac66c47e696f203747220607&q=${search}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setCity(parsedData.current);
            console.log(parsedData)
        };
        getData();
    },[search])

    return (
        
    <div className='box'>
        {setCity}
        <div className="inputData">
        <input type="search" className='inputField' onChange={onChange} />
        </div>
        {!city?(
                
        <div className='info'>
        <h2 className='location' style={{fontSize:"2rem"}}>
            <i className='fas fa-street-view'>
            </i>
            {search} <br />
            No Such City Found
            
            </h2>
            <h1 className="tempmin_max">
                Please Enter a Valid City Name
            </h1>
        {/* <h1 className='temp'>Temprature : {city.temp_c}</h1> */}
        {/* <h3 className='tempmin_max'>Humidity : {city.humidity} <br /> */}
        {/* Feels Like : {city.feelslike_c} */}
        {/* </h3> */}
        </div>

        
        
        ) :( 
        <div className='info'>
        <h2 className='location'>
            <i className='fas fa-street-view'>
            </i>
            {search}</h2>
        <h1 className='temp'>Temprature : {city.temp_c}</h1>
        <h3 className='tempmin_max'>Humidity : {city.humidity} <br />
        Feels Like : {city.feelslike_c}
        </h3>
        <p>Last Updated : {city.last_updated}</p>
        </div> )
        }
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
    </div>
  )
}

