import React,{useState} from 'react'
const Formulario = ({nuevaLocalizacion}) => {
    const[ciudad,setCiudad]=useState("") // aca se guarda la ciudad buscada
    const onSubmit =(e)=>{
        e.preventDefault(); // para persistir el evento/dato no se recargue la pagina
        console.log(ciudad);
        if(ciudad === "" || !ciudad)return; // pregunta por si esta vacia la variable ciudad o si no hay nada
        nuevaLocalizacion(ciudad); // agarra la ciudad del input
    }
    return ( 
            <div className='container'>
                <form onSubmit={onSubmit}>
                    <div className='input-group mt-3 mx-auto' >
                        <input type="text" className='form-control' placeholder='Ciudad' onChange={(e)=>setCiudad(e.target.value)} />
                        <button className='btn btn-primary input-group-text' type='submit'>Buscar</button>
                    </div>
                </form>
                
            </div>
     );
}
 
export default Formulario;