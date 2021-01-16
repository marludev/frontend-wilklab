import React from 'react'
// ?  ReCaptcha
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
// ? componentes
import { Layout } from '../components/layout'
import { FormContact } from '../components/content'
// ? iconos
import { IconInstagram } from '../components/icons'

const Contact = () => (
  <GoogleReCaptchaProvider
    className="z-40"
    reCaptchaKey={process.env.GATSBY_RECAPTCHA}
    language="es"
  >
    <Layout
      title="¿Necesitas ayuda con tu empresa o proyecto 🤔? Contacta con Wilklab 🐺"
      description="⬆️ Estamos para ayudarte ante cualquier inconveniente o duda que puedas tener en tu proyecto. ⬆️"
      showSubscription={false}
      showFooter={false}
      fullScreen={true}
    >
      <div className="flex items-center my-10 md:my-0">
        <div className="container relative flex flex-wrap items-center justify-center pb-32 md:mt-20 lg:mb-32 sm:pb-0 sm:flex-wrap lg:flex-wrap">
          <FormContact />
          <div
            data-aos="zoom-in"
            className="w-full p-10 mx-auto bg-gray-100 shadow-2xl lg:w-1/4 lg:absolute lg:mr-48 lg:-mb-20 lg:right-0 lg:bottom-0"
          >
            <h2 className="my-8 text-xl font-bold tracking-widest text-center">
              Te ayudamos con tu proyecto
            </h2>
            <p className="flex items-center justify-center my-6 lg:justify-start">
              <IconInstagram className="w-10 h-10 text-custom-tertiary" />
              <span className="pl-4 text-lg">@wilklab</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </GoogleReCaptchaProvider>
)

export default Contact
