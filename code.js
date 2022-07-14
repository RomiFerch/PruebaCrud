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

    LeerDB()

}
const LeerDB = () => {
    listaActividadesUI.innerHTML = '';

    arrayActividades = JSON.parse(localStorage.getItem('tareas'))
    
    if (arrayActividades === null) {
        arrayActividades = []
    }else {

        arrayActividades.forEach(element => {
            listaActividadesUI.innerHTML +=`<div class="alert alert-primary" role="alert"><b>${element.actividad}</b> - ${element.estado}
<span class="mx-3 float-end"><i class="fa-solid fa-pen-to-square mx-2"> edit </i><i class="fa-solid fa-trash-can mx-2"> eliminar </i></span></div>`            
        });
    }
}

formularioUI.addEventListener('submit', (e)=>{
    e.preventDefault()
    let actividadUI = document.querySelector('#actividad').value;

    CrearItem(actividadUI)
    GuardarDB()

    formularioUI.reset()  


  
})
document.addEventListener('DOMContentLoaded', LeerDB)

listaActividadesUI.addEventListener('click', (e) =>{
    e.preventDefault()

    console.log(e.path[2].childNodes[0].innerHTML);

    console.log(e.target.innerHTML);

    if(e.target.innerHTML === 'edit' ||e.target.innerHTML === 'eliminar' ){
        console.log('accion de edit');
    }
});