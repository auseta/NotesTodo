import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledFormContainer = styled.form`
  background-color: #ffffff70;
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
`

export const StyledFormButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledButton = styled(motion.button)`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
`

export const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-style: italic;
  height: 2.5rem;
  border-radius: 3px;
  outline: none;
  width: 70%;
`

export const StyledH1 = styled.h1`
  margin-top: 4rem;
  letter-spacing: 2px;
  font-style: italic;
`