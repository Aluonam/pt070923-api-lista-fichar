import React from 'react'
import BotonDetalles from './BotonDetalles'

const TablaUsuarios = ({datosAPI, setDatosAPI}) => {


    const datosListaUsuarios = datosAPI.map((elementoActual)=>{
        return(
            <tr>
                <td>{`${elementoActual?.name.first} ${elementoActual?.name.last}`}</td>
                <td>{elementoActual?.dob.age}</td>
                <td>{elementoActual?.gender}</td>
                <td><BotonDetalles elementoActual={elementoActual}></BotonDetalles></td>
            </tr>
        )
    })

  return (
    <>
    <table>
        <thead>
            <tr> 
                <th>Nombre completo</th>
                <th>Edad</th>
                <th>Genero</th>
                <th>Botón</th>
            </tr>
        </thead>
        <tbody>
            {datosListaUsuarios}
        </tbody>
    </table>
    </>
  )
}

export default TablaUsuarios