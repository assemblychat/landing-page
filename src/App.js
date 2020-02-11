import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { animated, useSpring, config } from 'react-spring'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1b1b1b;
    color: white;
  }
`

function App({ className }) {
  const h1Props = useSpring({
    transform: 'translateY(0)',
    opacity: 1,
    from: { transform: 'translateY(64px)', opacity: 0 },
    config: config.molasses,
  })

  const pProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 })

  return (
    <>
      <GlobalStyle />
      <div className={className}>
        <animated.h1 style={h1Props}>Assembly</animated.h1>
        <animated.p style={pProps}>Coming Soon</animated.p>
      </div>
    </>
  )
}

const StyledApp = styled(App)`
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0;
  }
`

export default StyledApp
