import React from 'react'

// ? componentes
import { Btn } from '../components/common'

const NotFoundPage = () => (
  <div className="flex items-center justify-center min-h-screen overflow-x-hidden bg-dark">
    <div>
      <div className="flex justify-center">
        <p className="error" data-text="404">
          404
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-3xl text-gray-100">Pagina no encontrada</p>
      </div>
      <div className="flex justify-center">
        <Btn btnClass="mt-8 btn-white" direction="/">
          Inicio
        </Btn>
      </div>
    </div>
  </div>
)

export default NotFoundPage
