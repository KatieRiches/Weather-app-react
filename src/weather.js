import React from 'react';
import axios from 'axios';
import './App.css';

export default function Weather() {

    function handleResponse(response){
        alert(`The temperature in Cromwell is ${response.data.main.temp} °`)
    }
    let apiKey = `4cf67821f8a1ed58161e24f9867203f3`
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cromwell&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from the weatherman</h2>;
}