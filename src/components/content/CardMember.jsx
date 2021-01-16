import React from 'react'

import { IconInstagram, IconLinkedin, IconTwitter } from '../icons'
const CardMember = ({
  image,
  name,
  position,
  color,
  twitter,
  instagram,
  linkedin,
}) => (
  <div className="flex flex-wrap justify-center w-full">
    <div className="flex justify-center w-full">
      <img
        src={image.src}
        className={`w-56 h-56 border-8 rounded-full ${color}`}
        alt={`imagen ${name}`}
      />
    </div>
    <div className="flex flex-wrap justify-center w-full my-4">
      <h4 className="w-full text-xl font-bold text-center text-custom-primary">
        {name}
      </h4>
      <p className="w-full text-lg text-center text-gray-100">{position}</p>
    </div>
    <div className="flex justify-around w-24 text-2xl text-custom-primary">
      {linkedin && (
        <a
          className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-600"
          target="_blank"
          rel="noreferrer"
          href={linkedin}
        >
          <IconLinkedin className="w-6 h-6" />
        </a>
      )}

      {twitter && (
        <a
          className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-300"
          target="_blank"
          rel="noreferrer"
          href={twitter}
        >
          <IconTwitter className="w-6 h-6" />
        </a>
      )}
      {instagram && (
        <a
          className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-pink-500"
          target="_blank"
          rel="noreferrer"
          href={instagram}
        >
          <IconInstagram className="w-6 h-6" />
        </a>
      )}
    </div>
  </div>
)

export default CardMember
