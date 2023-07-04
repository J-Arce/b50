import React from 'react'

export const Formulario = () => {
  return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text"/><br/>
        
        <label>Apellido: </label><br/>
        <input type="text"/><br/>
        
        <label>Edad: </label><br/>
        <input type="number"/><br/>

        <button type='button'>Registrar</button>
    </form>
  )
}
