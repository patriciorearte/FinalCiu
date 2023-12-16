import { Fragment } from 'react';
import React,{useState} from 'react'
import Formulario from './Formulario';
const ControlClima = () => {
    let urlApi = "https://api.openweathermap.org/data/2.5/weather?appid=69c112b46c91738193e83d82a8f9af9d&lang=es"
    let urlCiudad ="&q="; //parametro que usa la url para buscar la ciudad
    let urlPredicciones = "https://api.openweathermap.org/data/2.5/forecast?appid=69c112b46c91738193e83d82a8f9af9d&lang=es"
    const [clima,setClima] = useState([]);
    const[predicciones,setPredicciones] = useState([]);
    const[logoCargando,setlogoCargando] = useState(false);
    const[visualizacion,setVisualizacion] = useState(false);
    const[localizacion,setLocalizacion] = useState("");

    const getLocalizacion = async (loc) => {
        setlogoCargando(true); // muestra el logo de cargando
        setLocalizacion(loc);
        //Clima de la localidad

        urlApi= urlApi+urlCiudad+loc // contena las variables para hacer la consulta del clima de la ciudad solicitada 
        await fetch(urlApi).then((response)=>{
            if(!response.ok) throw {response} // salida por si ocurre un error
            return response.json // salida si la respuesta es ok.
        }).then((informacionClima)=>{
            setClima(informacionClima); // carga la informacion obtenida de la api a la variable clima
        }).catch(error =>{
            setlogoCargando(false); // para que no aparezca el logo de cargando
            setVisualizacion(false); // para que no se vizualice el error
        })

        //Prediccion de la localidad en 5 dias
        urlPredicciones= urlPredicciones+urlCiudad+loc;
        await fetch(urlPredicciones).then((response)=>{
            if(!response.ok) throw {response} // salida por si ocurre un error
            return response.json // salida si la respuesta es ok.
        }).then((informacionPredicciones)=>{
            setPredicciones(informacionPredicciones); // carga la informacion obtenida de la api a la variable clima
            setlogoCargando(false);
            setVisualizacion(true);
        }).catch(error =>{
            setlogoCargando(false); // para que no aparezca el logo de cargando
            setVisualizacion(false); // para que no se vizualice el error
        })
    }
    return ( 
        <Fragment>
            <Formulario
                nuevaLocalizacion={getLocalizacion} // le paso por prop la funcion
            ></Formulario>
        </Fragment>
     );
}
 
export default ControlClima;