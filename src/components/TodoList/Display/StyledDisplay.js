import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 71%;
`

export const StyledLi = styled(motion.li)`
  color: black;
  background-color: #ffffff70;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  border-radius: 10px;
  border: 2px solid #0c5e0c8f;
  width: 99%;
  list-style: none;
  font-style: italic;
  font-size: 1.15rem;
`

export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: .8rem;
`

export const StyledButton = styled.button`
  color: ${props => props.delete ? 'red' : "green"};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  padding: 5px;
  border: 2px solid ${props => props.delete ? 'red' : "green"};
  border-radius: 50%;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: ${ props => props.delete ? '#FA3643' : '#2fbd68' };
    color: ${ props => props.delete ? '#ffffff' : '#ffffff' };
    border-color: ${props => props.delete ? '#FA3643' : "#2fbd68"};
  }
`