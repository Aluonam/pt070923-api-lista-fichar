import React, {useState} from 'react'

export const Contrasena = ({elementoActual}) => {


    const [contraVisible, setContraVisible] = useState(false)
    

  return (
    <>
    <div>
        {/* Lógica para que el input se marque como password */}
        <input value={elementoActual.login.password} type={contraVisible?"text":"password"}/>
        <button  onClick={()=>{setContraVisible(!contraVisible)}}>Mostrar Contraseña</button>
    </div>
    </>
  )
}
