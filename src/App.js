import axios from 'axios';
import {useState} from 'react';


function App() {

  const [data,setData] = useState({});
  const [location,setLocation] =useState('');

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=612fe3536c632e827fd6e6904793c05a&units=imperial`

  const searchLocation =(event)=>{
    if(event.key === 'Enter'){
      console.log(event);
      axios.get(url)
      .then((response)=>{
        setData(response.data)
        console.log(response.data);
      })
      setLocation('');
    }
  }

  return (
    <div className="App">
      <div className='search'>
          <input 
          type="text"
          value={location}
          onChange={event=>setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder= "Enter Location"

          />
      </div>

      <div className='container'>
       {/* TOP SIDE */}
        <div className='top'>

          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
         
            {data.main ? <h1>{Math.round(data.main.temp)} °F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
    
        </div>
        {/* RIGHT SIDE */}

      {data.name != undefined && 

        <div className='bottom'>

            <div className='feels'>
             {data.main ? <p className='bold'>{ Math.round(data.main.feels_like)}</p> : null}
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p>{data.main.humidity} %</p> : null}
              <p>Humiditys</p>
            </div>
            <div className='wind'>
            {data.wind ? <p className="bold">{ Math.round(data.wind.speed)} MPH</p> : null}
            <p>Wind speed</p>
            </div>
  
          </div>
      }
      


      
      </div>

      
    </div>
  );
}

export default App;
