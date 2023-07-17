'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Saludo } from '../Componentes/Saludo'
import { Formulario } from '../Componentes/Formulario'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Saludo nombre={"Jose"}/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
    </Routes>
  )
}
