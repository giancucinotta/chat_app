import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.ripple.min'
import LoginForm from './LoginForm'

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    <LoginForm/>
  </div>
}

export default MyComponent;