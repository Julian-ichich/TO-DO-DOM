const tareaUno = document.querySelector('#uno')
const action = () => {
    const textoUno = document.querySelector('#textUno')
    textoUno.classList.toggle('text-decoration-line-through')
}
tareaUno.addEventListener('click', action)

const btnTarea = document.querySelector('#btnTarea')
const creaTarea = document.querySelector('#creaTarea')

let value = ''
creaTarea.addEventListener('change', (e) => {
    value = e.target.value
})
let A=0
const crearTarea = () => {
    A++
    //id de cada div del  texto creado
    let IDINPUT = `ITEM-${A}`

    //id del texto creado
    let IDTEXT = `TEXT-${A}`

    //id del grandfather
    let IDGRANDF=`FATHER-${A}`
    //id boton delete
    let IDBTNDELETE=`btn-${A}`


    if(value==''){
        alert('INGRESE TEXTO/METAS/TAREAS')

    }
    else{
        const divGrandFather=document.querySelector('#tareas')
        const divFather=document.createElement('div')
        const divMother=document.createElement('div')
        divGrandFather.insertAdjacentElement('afterbegin', divFather)
        divFather.classList.add('d-flex', 'bg-danger','card','mt-3','decorationSearch')
        divMother.classList.add('d-flex', 'card-body','gap-5','justify-content-between')
        const div = document.createElement('div')
        div.classList.add('form-check')
        const input = document.createElement('input')
        input.type = 'checkbox'
        input.id = IDINPUT//'dos'
        input.classList.add('form-check-input')
        const label = document.createElement('label')
        label.classList.add("form-check-label")
        const parrafo = document.createElement('p')
        parrafo.id = IDTEXT//'textDos' 
        parrafo.textContent = value
        div.insertAdjacentElement('afterbegin', label)
        div.insertAdjacentElement('afterbegin', input)
        label.insertAdjacentElement('afterbegin', parrafo)
        const tareas = document.querySelector('#tareas')
        tareas.insertAdjacentElement('afterbegin', div)
        parrafo.classList.add('bg-danger','text-white')
        const divDelete=document.createElement('div')
        const btnDelete=document.createElement('button')
        //div.insertAdjacentElement('afterbegin', divDelete)
        divDelete.insertAdjacentElement('afterbegin', btnDelete)
        divMother.appendChild(divDelete)
        btnDelete.id=IDBTNDELETE
        divFather.id= IDGRANDF
        btnDelete.classList.add('imgBoton','botonTamanio','text-white')
       
        btnDelete.textContent='eliminar'
        
        divFather.insertAdjacentElement('afterbegin', divMother)
        divMother.insertAdjacentElement('afterbegin', div)//div grandfather ingresar father
    
        let tareaDos = document.querySelector(`#${IDINPUT}`)
        const accion = () => {
            const textoDos = document.querySelector(`#${IDTEXT}`)
            textoDos.classList.toggle('text-decoration-line-through')
            textoDos.classList.replace('bg-danger','bg-success')
            const fondo=document.querySelector(`#${IDGRANDF}`)
            fondo.classList.replace('bg-danger','bg-success')
            //window.alert('felicidades!\nLo lograste!!')
        }
    
        
        let tareita = document.querySelector(`#${IDINPUT}`)
        const clickdoble = () => {
            const textoDos = document.querySelector(`#${IDTEXT}`)
            textoDos.classList.replace('bg-success','bg-danger')
            const fondo=document.querySelector(`#${IDGRANDF}`)
            fondo.classList.replace('bg-success','bg-danger')
    
        }

        const divbtndelete = document.querySelector(`#${IDGRANDF}`)
        const botonEliminar2 = ()  => {
            const botonEliminar=document.querySelector(`#${IDGRANDF}`)
            divbtndelete.remove(botonEliminar)
        }
        
    
        tareita.addEventListener('dblclick', clickdoble)
        divDelete.addEventListener('click', botonEliminar2)
        tareaDos.addEventListener('click', accion)
        
        creaTarea.value = ""
        value=''
        
    }

   

}



btnTarea.addEventListener('click', crearTarea)




const crearTareita = () => {



    const div = `
    <div class="form-check">
    <input id="${Idinput}" class="form-check-input" type="checkbox" value="">
    <label class="form-check-label" for="defaultCheck1">
    <p id="${Idtext}">${value}</p> 
    </label>
    </div>`

    const tareas = document.querySelector('#tareas')
    tareas.insertAdjacentHTML('afterbegin', div)

    const tareaDos = document.querySelectorAll(`#${Idinput}`)
    const accion = () => {
        const textoDos = document.querySelector(`#${Idtext}`)
        textoDos.classList.toggle('text-decoration-line-through')
    }

    tareaDos.addEventListener('click', accion)


}

//btnTarea.addEventListener('click', crearTareita)


// const tareaDos=document.querySelector('#dos')
// const accion = () =>{
//     const check=document.createElement('class')

//     const textoDos=document.querySelector('#textDos')
//     textoDos.classList.toggle('text-decoration-line-through')


// }
// tareaDos.addEventListener('click', accion)