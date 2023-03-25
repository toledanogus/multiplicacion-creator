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
            <h2>Menu</h2>
            <div>Elige la cantidad de multiplicaciones que deseas crear:</div>
            <form onSubmit={getValor} >
                <input
                    type="number"
                    value={inputV}
                    onChange={onInputChange} />
                <button>Crear</button>

            </form>
            
        </>
    )
}
