import React, { useEffect, useState } from 'react'
import Glide from '@glidejs/glide'

// ? icons
import { IconArrowRight, IconArrowLeft } from '../icons'

const Slider = ({ children, title, subTitle, position = 'right' }) => {
  const [slider] = useState(
    new Glide('.glide', {
      type: 'carousel',
      perView: 4,
      breakpoints: {
        1024: {
          perView: 3,
        },
        767: {
          perView: 1,
        },
      },
    })
  )

  useEffect(() => {
    slider.mount()
    return () => slider.destroy()
  }, [])

  return (
    <section className="container my-20">
      <div
        className={`flex mb-20 ml-10 text-gray-100 md:ml-0 ${
          position === 'left' ? 'justify-end' : 'justify-start'
        }`}
      >
        <div
          className={`flex flex-wrap pr-10 md:p-10 md:w-4/5 lg:w-2/5 lg:p-0 ${
            position === 'left' ? 'justify-end' : 'justify-start'
          }`}
        >
          <h3
            className={`w-full text-3xl font-bold text-gray-100 ${
              position === 'left' ? 'text-right' : 'text-left'
            }`}
          >
            {title}
          </h3>
          <span className="inline-block w-20 h-1 rounded bg-custom-primary" />
          {subTitle && (
            <p
              className={`w-full mt-8 text-lg ${
                position === 'left' ? 'text-right' : 'text-left'
              }`}
            >
              {subTitle}
            </p>
          )}
        </div>
      </div>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">{children}</ul>
        </div>
        <div
          className="flex justify-end glide__arrows"
          data-glide-el="controls"
        >
          <button
            className="text-gray-300 bg-gray-800 rounded-full hover:text-gray-100 hover:bg-gray-800 glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <IconArrowLeft className="w-4 h-6" />
          </button>
          <button
            className="text-gray-300 bg-gray-800 rounded-full hover:text-gray-100 hover:bg-gray-800 glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <IconArrowRight className="w-4 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
export default Slider
