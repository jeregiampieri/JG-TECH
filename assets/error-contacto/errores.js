// Boton enviar del formulario de contacto
const botonEnviar = document.querySelector(".boton-enviar")
// Formulario de nombre
const nombre = document.querySelector(".nombre")
// Formulario de numero telefonico
const telefono = document.querySelector(".telefono")
// Formulario de mail
const mail = document.querySelector(".mail")
// Formulario de consulta
const consulta = document.querySelector(".consulta")
// Mensaje error de nombre
const errorNombre = document.querySelector(".error-nombre")
// Mensaje error de numero
const errorNumero = document.querySelector(".error-numero") 
// Mensaje error de mail
const errorMail = document.querySelector(".error-mail")
// Mensaje error de consulta
const errorConsulta = document.querySelector(".error-consulta")

// Creo un array de objetos, donde cada uno es el campo junto a su mensaje de error, esto para hacer más mantenible y escalable la aplicación
const campos = [
    {campo: nombre, error: errorNombre},
    {campo: telefono, error: errorNumero},
    {campo: mail, error: errorMail},
    {campo: consulta, error: errorConsulta}
]

const validarCampos = ({campo,error}) => {
    if (campoVacio(campo)){
        error.innerHTML = `El campo ${campo.classList} es obligatorio`
        error.classList.remove("esconder")
        return false
    }else{
        error.classList.add("esconder")
        return true
    }

}

const campoVacio = (campo) =>{
    return (campo.value === "")
}

const validarFormulario = () => {
    return campos.every(validarCampos)
}

const manejoError = () => {

    // Para mantener almacenado en una variable un array con la validacion de los campos
    const formularioValidado = validarFormulario()

    if (formularioValidado){
        window.alert("¡Su consulta fue enviada con éxito! Pronto nos contactaremos con usted.")

        campos.forEach((campo) => {
            campo.campo.value = ""
        })
    }
}

const validarMensaje = () => {
    if (nombre.)
}

export const erroresInit = () => {
    botonEnviar.addEventListener("click", manejoError)
    nombre.addEventListener("blur", validarMensaje)
}