import React from 'react'

export const ExperienciaPage = () => {
  return (
    
    <>
    <div className="imgEsperiencia">
      <div className="w-full h-[22%] text-center">
        <p className="font-bold text-2xl text-blue-900 py-20">Experiencia</p>
      </div>

      <div className="mt-8 md:flex items-center">
        <div className="mt-8 h-48 md:w-1/2">
          <div className="bg-white rounded-md w-[70%] h-[100%] mx-auto">
            <p className="px-5 py-3 font-bold text-2xl text-blue-900">
              Aplicación web en Apps Script
            </p>
            <p className="px-5 py-2 font-bold text-blue-800">Creada en Apps Script de Google utilizando HTML, JavaScript y CSS</p>
            
          </div>
        </div>


        <div className="mt-8 h-48 md:w-1/2">
          <div className="bg-white rounded-md w-[70%] h-[100%] mx-auto">
            <p className="px-5 py-3 font-bold text-2xl text-blue-900">
              Aplicación web Trello
            </p>
            <p className="px-5 py-2 font-bold text-blue-800">Creada con HTML, JavaScript, Axios, CSS, usando hojas de cálculo como Api Rest</p>
            
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
