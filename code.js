//variables Globales
const formularioUI = document.querySelector('#formulario')
const listaActividades = document.getElementById('listaA')
let arrayActividades = []
let item = {

}
//funciones

const CrearItem = (actividades) => {
    let item = {
        actividad: actividades,
        estado: false
    }

    arrayActividades.push(item)
    return(item)

}
const GuardarDB = (actividad) => {

}

formularioUI.addEventListener('submit', (e)=>{
    e.preventDefault()
    let actividadUI = document.querySelector('#actividad').value;

    CrearItem(actividadUI)
    formularioUI.reset()
    


  
})