import React from 'react'

const TablaUsuarios = ({datosAPI, setDatosAPI}) => {


    const datosListaUsuarios = datosAPI.map((elementoActual)=>{
        return(
            <tr>
                <td>{`${elementoActual?.name.first} ${elementoActual?.name.last}`}</td>
                <td>{elementoActual?.dob.age}</td>
                <td>{elementoActual?.gender}</td>
                <td>boton</td>
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