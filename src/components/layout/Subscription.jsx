import React from 'react'

const Subscription = () => (
  <div className="container mb-10 md:mb-32 md:mt-32">
    <ul className="relative flex flex-col-reverse items-center px-3 py-5 border-2 rounded-lg border-custom-primary md:flex-row">
      <li className="w-full px-6 my-3 text-xl text-gray-100 md:w-1/2 md:my-auto">
        <p className="text-4xl font-bold leading-none text-center select-none md:mx-10 md:text-left">
          WILKLAB
        </p>
        <p className="text-3xl leading-none text-center select-none tracking-large md:mx-10 md:text-left">
          AGENCY
        </p>
      </li>
      <li className="right-0 w-full px-10 py-8 ml-auto text-lg md:px-16 md:absolute bg-custom-primary md:-mr-1 lg:mr-16 md:w-1/2">
        <h3 className="text-2xl font-bold">Regístrate Ahora</h3>
        <p>Boletín y regalos para entusiastas</p>
        <input
          className="w-full py-2 my-3 leading-tight text-gray-800 placeholder-gray-900 border-b-2 border-gray-800 appearance-none bg-custom-primary focus:outline-none"
          type="email"
          placeholder="Correo"
          disabled
        />
        <button
          type="submit"
          disabled
          className="float-right px-4 py-2 mt-8 text-lg transition duration-300 hover:bg-gray-800 hover:text-white"
        >
          Enviar
        </button>
      </li>
    </ul>
  </div>
)

export default Subscription
