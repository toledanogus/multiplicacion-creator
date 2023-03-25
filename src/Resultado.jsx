import React, { useEffect, useState } from "react";


export const Resultado = (props) => {

    let multi = Number(props.numeroDeMul);

    const [arr1, setArr1] = useState([89]);
    const [arr2, setArr2] = useState([74]);
    const [oculto, setOculto] = useState(true);


    const verResultados = () => {
        setOculto(false);
    }


    useEffect(() => {
        setArr1(new Array(multi).fill().map(() => Math.floor(Math.random() * 90) + 10));
        setArr2(new Array(multi).fill().map(() => Math.floor(Math.random() * 90) + 10));
        setOculto(true);
        // let numx = arr1[0]
        // const unidades = parseInt(numx.toString().charAt(numx.toString().length - 1));
        // const decenas = parseInt(numx.toString().slice(-2, -1));
        // console.log(numx, unidades, decenas)


    }, [props.numeroDeMul])

    return (

        <>
            <button className='btn btn-success' onClick={verResultados}>Ver resultados</button>
            <h2>Resultado</h2>

            <table>
                <tbody>
                    <tr>
                        {/* <td>{numArriba}</td> */}
                        {
                            arr1.map((val, i) => (
                                <React.Fragment key={i}>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>{arr1[i]}</td></React.Fragment>
                            ))
                        }
                    </tr>
                    <tr>
                        {/* <td className="resultado">x{numAbajo}</td> */}
                        {
                            arr2.map((val, i) => (
                                <React.Fragment key={i}>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td className="resultado"><span>x</span>  {arr2[i]}</td></React.Fragment>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            arr2.map((val, i) => (
                                <React.Fragment key={i}>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td hidden={oculto}>{parseInt(arr2[i].toString().charAt(arr2[i].toString().length - 1)) * arr1[i]}</td></React.Fragment>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            arr2.map((val, i) => (
                                <React.Fragment key={i}>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td hidden={oculto}className="resultado">{parseInt(arr2[i].toString().slice(-2, -1)) * arr1[i]}&nbsp;&nbsp;
                                    </td>
                                </React.Fragment>
                            ))
                        }
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        {
                            arr1.map((val, i) => (
                                <React.Fragment key={i}>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;&nbsp;</td>
                                    <td hidden={oculto}>{arr1[i] * arr2[i]}</td></React.Fragment>
                            ))

                        }
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
