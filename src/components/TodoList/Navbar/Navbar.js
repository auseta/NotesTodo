import React, { useState } from 'react'
import PokeballIcon from '../../../images/pokeball.png'
import PokeballOpenIcon from '../../../images/pokeballOpen.png'
import { StyledImage, StyledNavbarContainer } from './NavbarStyles'

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const handlePokeballIcon = () => {
    setIsOpen(!isOpen)
  }

  console.log(isOpen);

  return (
    <StyledNavbarContainer>
      <StyledImage onMouseOver={handlePokeballIcon} onMouseLeave={handlePokeballIcon} src={ isOpen ? PokeballOpenIcon : PokeballIcon } alt='pokeball-icon' />
    </StyledNavbarContainer>
  )
}

export default Navbar