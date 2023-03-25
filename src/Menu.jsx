import { useState } from "react";


export const Menu = (props) => {

    const [inputV, setInputV] = useState('')

    const onInputChange = (e) => {
        setInputV(e.target.value);
    }

    const getValor = (e) => {
        e.preventDefault();
        enviarPropiedad();
    }


    const enviarPropiedad = () => {
        props.enviarPropiedadAlPadre(inputV);
    }



    return (
        <>
        
            
            <div>Elige la cantidad de multiplicaciones que deseas crear:</div>
            <form onSubmit={getValor} >
                
                <div className="form-group">
                <input
                    className="form-control"
                    type="number"
                    value={inputV}
                    onChange={onInputChange} />
                    
                <button className='btn btn-primary'>Crear</button>
            </div>
            <hr />
            
        </form>
            
        </>
    )
}
