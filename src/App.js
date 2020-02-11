import React from 'react'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'

function App({ className }) {
  const h1Props = useSpring({
    transform: 'translateY(0)',
    opacity: 1,
    from: { transform: 'translateY(64px)', opacity: 0 },
    config: config.slow,
  })

  const pProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 })

  return (
    <div className={className}>
      <animated.h1 style={h1Props}>Assembly</animated.h1>
      <animated.p style={pProps}>Coming Soon</animated.p>
    </div>
  )
}

const StyledApp = styled(App)`
  background-color: #1b1b1b;
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
  width: 100vw;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0;
  }
`

export default StyledApp
