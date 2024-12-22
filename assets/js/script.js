const inputAgregar = document.getElementById('nueva-tarea')
const listaDeTareas = document.getElementById('lista-tareas')
const btnAgregar = document.querySelector('i')
const totalDeTareas = document.getElementById('total-tareas')
const tareasRealizadas = document.getElementById('tareas-realizadas')

const tareas = [
    { id: 1, nombre: 'Hacer mercado', completado: false },
    { id: 2, nombre: 'Hacer el desafio', completado: false },
    { id: 3, nombre: 'Pasear a Tiana', completado: false }
]

const agregarTarea = (tarea) => {
    console.log('agregar tarea', tarea)
    const ultimoEle = tareas[tareas.length-1]
    const tareaNueva = {id: (ultimoEle.id+1) , nombre: tarea, completado: false}
    tareas.push (tareaNueva)
}

const eliminarTarea = (id) => {
    const tarea = tareas.findIndex((tarea) => tarea.id === id)
    console.log(tarea)

    tareas.splice (tarea, 1)
    actTareas()
}

const cambiarEstadoTarea = (id) => {
    let tarea = tareas.find((tarea) => tarea.id === id)
    if (tarea) {
        tarea.completado = !tarea.completado

        console.log(tarea)
        actTareas()
    }
}

const actTareas = () => {
    const html = tareas.map(tarea => `
        <div class='tarjeta'>
        <p>${tarea.id}</p>
        <p class='${tarea.completado ? 'completado' : ''}' onclick='cambiarEstadoTarea(${tarea.id})' >${tarea.nombre}</p>
        <i class="fa-solid fa-square-minus" onclick='eliminarTarea(${tarea.id})' ></i>
        </div>

        `

    ).join('')

    //conteo
    const tareasCompletadas = tareas.filter(tarea => tarea.completado).length
    console.log(tareasCompletadas)

    tareasRealizadas.innerHTML = tareasCompletadas
    totalDeTareas.innerHTML = tareas.length
    listaDeTareas.innerHTML = html
}

btnAgregar.addEventListener ('click', () => {
    console.log(btnAgregar)

    const tareaInput = inputAgregar.value
    console.log(tareaInput)

    agregarTarea (tareaInput)
    inputAgregar.value = ''
    actTareas()
})

actTareas()

