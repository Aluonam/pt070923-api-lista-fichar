import TablaUsuarios from '@/pages/components/TablaUsuarios'
import React, { useEffect, useState } from 'react'

const ListaUsuarios = () => {

    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
      llamadaAPI()
    }, [])
    
    const llamadaAPI = async () => {
        const llamada = await fetch(`https://randomuser.me/api/?results=50`)
        const data = await llamada.json();
        // console.log(data.results)
        setDatosAPI(data.results)

    }

  return (
    <>
    <div>ListaUsuarios</div>
    <TablaUsuarios datosAPI={datosAPI} setDatosAPI={setDatosAPI}></TablaUsuarios>
    </>
  )
}

export default ListaUsuarios