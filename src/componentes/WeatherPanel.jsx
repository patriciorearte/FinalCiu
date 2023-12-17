import { Fragment } from 'react';
import React,{useState} from 'react'
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=69c112b46c91738193e83d82a8f9af9d&lang=es";
    let cityUrl = "&q="; // parametro que usa la URL para buscar la ciudad
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=69c112b46c91738193e83d82a8f9af9d&lang=es"

    const [weather, setWeather] = useState([]); //respuesta de la api de clima actual
    const [forecast, setForecast] = useState([]); //respuesta de la api de predicciones durante 3h
    const [loading, setLoading] = useState(false);// estado del spinner
    const [show, setShow] = useState(false);// vizualiacion de la card con la informacion de la api
    const [location, setLocation] = useState(""); //comunicacion con el formulario

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //weather

        urlWeather = urlWeather + cityUrl + loc; //concatena para completar toda la url para la respuesta de la pi

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response} // manejo del error
            return response.json();// formato json de la repuesta
        }).then((weatherData) =>{ // weatherdata = informacion de la api
            setWeather(weatherData);
        }).catch(error =>{
            setLoading(false);// no muestra el spinner
            setShow(false);// no muestra la card con la info 
        });

        //Forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            setForecast(forecastData);
            setLoading(false);
            setShow(true);

        }).catch(error =>{
            setLoading(false);
            setShow(false);
        });

        
    }


    return(

        <Fragment>
    
            <Form
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />


        </Fragment>

     );
}
 
export default WeatherPanel;