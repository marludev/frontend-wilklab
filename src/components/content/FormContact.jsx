import React from 'react'

// ? servicio que recibe formulario
import { useForm } from '@statickit/react'

// ? formulario
import { useFormik } from 'formik'
import * as Yup from 'yup'

// ? componente
import { Spinner } from '../common'

const FormContact = () => {
  const [state, submit] = useForm(process.env.GATSBY_CONTACT)

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Campo Requerido')
        .email('Correo Electronico Invalido')
        .min(5, 'Minimo 5 Caracteres'),
      name: Yup.string()
        .required('Campo Requerido')
        .min(5, 'Minimo 5 Caracteres')
        .max(25, 'Maximo 25 Caracteres'),
      message: Yup.string()
        .required('Campo Requerido')
        .min(10, 'Minimo 10 Caracteres')
        .max(256, 'maximo 256 caracteres'),
    }),
    onSubmit: () => {
      submit()
    },
  })

  return (
    <>
      {state.succeeded ? (
        <div className="flex items-center h-64 p-10 mt-20 md:mt-0 bg-custom-secondary">
          <p className="mt-4 text-lg font-bold lg:w-3/5">
            ¡Su mensaje ha sido enviado correctamente! Pronto nos comunicaremos
            con usted.
          </p>
        </div>
      ) : (
        <div
          className="w-full h-full p-10 mt-20 lg:w-1/2 md:mt-0 bg-custom-secondary"
          data-aos="flip-left"
        >
          <form className="w-full lg:w-2/3" onSubmit={formik.handleSubmit}>
            <div className="w-full">
              <h1 className="mb-8 text-3xl font-bold tracking-widest">
                Envíanos tu Proyecto
              </h1>
            </div>
            <input
              className="w-full py-4 placeholder-gray-900 bg-transparent border-b-2 border-gray-800 "
              name="name"
              placeholder="Nombre y apellido"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="w-full p-2 font-bold text-custom-tertiary">
                {formik.errors.name}
              </p>
            )}
            <input
              className="w-full py-4 placeholder-gray-900 bg-transparent border-b-2 border-gray-800 "
              name="email"
              placeholder="Correo"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="w-full p-2 font-bold text-custom-tertiary">
                {formik.errors.email}
              </p>
            )}
            <textarea
              className="w-full py-4 placeholder-gray-900 bg-transparent border-b-2 border-gray-800 resize-none "
              name="message"
              as="textarea"
              placeholder="Mensaje"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.message && formik.errors.message && (
              <p className="w-full p-2 font-bold text-custom-tertiary">
                {formik.errors.message}
              </p>
            )}
            <div className="flex justify-end w-full ">
              <button
                className={
                  state.submitting
                    ? 'px-4 py-2 mt-8 text-lg text-white bg-gray-800'
                    : 'px-4 py-2 mt-8 text-lg transition duration-300 hover:bg-gray-800 hover:text-white'
                }
                type="submit"
                disabled={!!state.submitting}
              >
                <div className="flex items-center">
                  {state.submitting ? (
                    <>
                      {' '}
                      <span className="mr-2">cargando</span> <Spinner />
                    </>
                  ) : (
                    <span>Enviar</span>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default FormContact
