import React from 'react'
import DisenioSpinner from "../css/DisenioSpinner.css"
const Spinner = () => {
    return ( 
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
     );
}
 
export default Spinner;