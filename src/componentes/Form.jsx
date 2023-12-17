import React,{useState} from 'react'
const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault(); // funcion para que no recargue la pagina despues del evento(persiste el dato del input)
        if(city === "" || !city) return; // pregunta por el estado de city por si tiene vacio o no tiene nada

        newLocation(city);
    }

    return(

        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mt-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) =>setCity(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>

    );
}

export default Form;
