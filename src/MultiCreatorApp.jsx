import { useState } from "react";
import { Menu } from "./Menu"
import { Resultado } from "./Resultado"



export const MultiCreatorApp = () => {

const [numMul, setNumMul] = useState(1);


    const recibirPropiedadDelHijo = (propiedad) => {
        setNumMul(propiedad);
    }



    return (
        <>
            <h2>Creador de multiplicaciones Gus</h2>
            <hr />
            <Menu enviarPropiedadAlPadre={recibirPropiedadDelHijo} />
            <Resultado numeroDeMul={numMul} />

        </>

    )
}
