import axios from 'axios';
import {useState} from 'react';


function App() {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=amol&appid=612fe3536c632e827fd6e6904793c05a'

  return (
    <div className="App">
      <div className='container'>
       {/* TOP SIDE */}
        <div className='top'>

          <div className='location'>
            <p>amol</p>
          </div>
          <div className='temp'>
            <h1>12c</h1>
          </div>
          <div className='description'>
            <p>Rainy</p>
          </div>
    
        </div>
        {/* RIGHT SIDE */}

        <div className='bottom'>

          <div className='feels'>
            <p className='bold'>12c</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humiditys</p>
          </div>
          <div className='wind'>
          <p className='bold'>12 MPH</p>
          <p>Wind speed</p>
          </div>

        </div>
      </div>

      
    </div>
  );
}

export default App;
