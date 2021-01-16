import React, { useEffect } from 'react'
import { Header, Footer, SEO, Subscription } from './'

// ? animaciones
import AOS from 'aos'

const Layout = ({
  children,
  title,
  description,
  showSubscription = true,
  showHeader = true,
  showFooter = true,
  fullScreen = false,
  image = 'https://res.cloudinary.com/wilklab/image/upload/v1587848497/w_2_75837068b9.png',
}) => {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      once: true,
      offset: 10,
    })
  }, [])
  return (
    <>
      <SEO title={title} description={description} image={image} />
      <div
        className={`overflow-x-hidden bg-dark ${fullScreen && 'min-h-screen'}`}
      >
        {showHeader && <Header />}
        <main>{children}</main>
        {showSubscription && <Subscription />}
        {showFooter && <Footer />}
      </div>
    </>
  )
}

export default Layout
