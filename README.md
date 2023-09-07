# pt070923-api-lista-fichar
API https://randomuser.me/

 Muestra un listado de 50 usuarios en una tabla que tenga las siguientes columnas
    -  Nombre completo (con apellidos)
    - Edad
    - Genero
    - Un botón de detalle
    
 El botón de detalle permite abrir un modal de ANT Design y se mostrarán los siguientes campos del usuario:
    o Imagen
    o Username
    o Password (la pasword estará oculta y tendrá un botón para permiƟr que se muestre)

 El modal tendrá el siguiente código de forma obligatoria:
<code>
useEffect(() => {
 console.log("no puedo repetirme más de dos veces")
 }, [])
 </code>

Como indica el console.log no está permiƟdo que salga más de dos veces por consola al
renderizar el SPA.
 En el Modal se mostrarán los siguientes campos del usuario:
    o Imagen
    o Username
    o Password (la pasword estará oculta y tendrá un botón para permiƟr que se
    muestre)

 Dentro de este modal también tendremos un contador asociado a cada usuario que
nos permite sumar y restar sin bajar de 0 ni sumar más de 10. Este contador Ɵene que
mantener el numero que hayamos seleccionado al cerrar el modal y volver a abrirlo.

 Por úlƟmo vamos a añadir una nueva columna a la tabla con un botón de “Fichar” el
cual nos permite agregar usuarios a nuestro equipo.
    o Para ver nuestro equipo tendremos otro botón en la parte superior que sacara.
    un modal con los que hayamos fichado.
    o Ese modal tendrá un botón para poder eliminar del equipo.
    o No podremos fichar dos veces a la misma persona.
    o Si cerramos la pestaña del navegador y la volvemos a abrir el equipo que teníamos como “fichado” tendrá que mantenerse visible.

 Crea un switch que permita cambiar el css de claro a oscuro en la página web.

 (BONUS) Añade un botón que si lo pulsas una vez te muestre los hombres, si lo pulsas
otra solo las mujeres y si lo pulsas una tercera vez te muestre ambos. El texto del botón
debe ir cambiando a lo que vas a filtrar si lo pulsas.