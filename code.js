//variables Globales
const formularioUI = document.querySelector('#formulario')
const listaActividadesUI = document.getElementById('listaA')
let arrayActividades = []

//funciones

const CrearItem = (actividades) => {
    let item = {
        actividad: actividades,
        estado: false
    }

    arrayActividades.push(item)
    return(item)

}
const GuardarDB = () => {
    localStorage.setItem('tareas', JSON.stringify(arrayActividades))

}
const LeerDB = () => {
    listaActividadesUI.innerHTML = '';

}

formularioUI.addEventListener('submit', (e)=>{
    e.preventDefault()
    let actividadUI = document.querySelector('#actividad').value;

    CrearItem(actividadUI)
    GuardarDB()

    formularioUI.reset()  


  
})
document.addEventListener('DOMContentLoaded', LeerDB)