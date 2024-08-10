import React , { useContext } from 'react'
import {GlowContext} from '../pages/Home/UseGlow'

function Header() {
  const { isHovered } = useContext(GlowContext);
  return (
    <div className='p-5 bg-primary flex justify-between header'>
        <h1 className={isHovered ? `glow` : 'text-secondary text-4xl font-semibold' }>A</h1>
        <h1 className={isHovered ? `glow1` : 'text-white text-4xl font-semibold' }>J</h1>
        <h1 className={isHovered ? `glow2` : 'text-tertiary text-4xl font-semibold' }>K</h1>
    </div>
  )
}

export default Header