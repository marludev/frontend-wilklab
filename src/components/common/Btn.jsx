import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Boton = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  color: ${(props) => props.theme.main};
  font-size: 20px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    background: ${(props) => props.theme.main};
    color: ${(props) =>
      props.theme.main !== '#17202A' ? '#17202A' : '#E9E9E9'};
    box-shadow: 0 0 5px ${(props) => props.theme.main},
      0 0 25px
        ${(props) =>
          props.theme.main === '#17202A' ? 'transparent' : props.theme.main},
      0 0 50px
        ${(props) =>
          props.theme.main === '#17202A' ? 'transparent' : props.theme.main},
      0 0 100px
        ${(props) =>
          props.theme.main === '#17202A' ? 'transparent' : props.theme.main};
  }

  & span {
    position: absolute;
    display: block;
  }

  & span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.main}
    );
    animation: animate1 2s linear infinite;
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent,
      ${(props) => props.theme.main}
    );
    animation: animate2 2s linear infinite;
    animation-delay: 0.5s;
  }

  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      270deg,
      transparent,
      ${(props) => props.theme.main}
    );
    animation: animate3 2s linear infinite;
    animation-delay: 1s;
  }

  & span:nth-child(4) {
    left: 0;
    bottom: -100%;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      360deg,
      transparent,
      ${(props) => props.theme.main}
    );
    animation: animate4 2s linear infinite;
    animation-delay: 1.55s;
  }

  @keyframes animate1 {
    0% {
      left: -100%;
    }

    50%,
    100% {
      left: 100%;
    }
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }

    50%,
    100% {
      top: 100%;
    }
  }
  @keyframes animate3 {
    0% {
      right: -100%;
    }

    50%,
    100% {
      right: 100%;
    }
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }

    50%,
    100% {
      bottom: 100%;
    }
  }
`

const Btn = ({ btnClass, direction, children, effect, delay }) => {
  let color = ''

  if (btnClass.search('btn-blue') !== -1) {
    color = 'var(--color-primary)'
  } else if (btnClass.search('btn-white') !== -1) {
    color = '#E9E9E9'
  } else if (btnClass.search('btn-dark') !== -1) {
    color = '#17202A'
  }

  return (
    <>
      <Boton
        className={btnClass}
        to={direction}
        data-aos={effect}
        data-aos-delay={delay}
        theme={{ main: `${color}` }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </Boton>
    </>
  )
}

export default Btn
