import React, { useState } from "react";
import axios from "axios";
// const city = "london";
const APIkey = "b07e906cd8138c18db523a2cfcaba3df";


function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      );
        setData(response.data);
        console.log(response.data)
    } catch (err) {
      alert("Please Enter the city Name Correctly");
    }
  };

  return (
    < div className="container">
      <h1 className="text-primary my-5">Weather-Details</h1>
      <input
        type="text"
              value={city}
              placeholder="Enter city name..."
        onChange={(e) => {
          setCity(e.target.value);
        }}
      /><br/>
      <button className="btn btn-success btn-sm mx-3 mt-5" onClick={fetchData}>See Weather</button>

      
        {data && (
          <div className="container mt-5" id="sytleme">
            <h1 className="text-white mb-3">{data.name}</h1>
            <h3 className="text-info">{data.main.temp + " C"}</h3>
            
            <h6 className="mt-4">lat-{data.coord.lat}</h6>
            <h6>lon- {data.coord.lon}</h6>
          </div>
        )}
   
    </div>
  );
}

export default Weather;
