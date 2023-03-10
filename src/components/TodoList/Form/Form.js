import React, { useContext } from 'react'
import { BsTrash } from 'react-icons/bs'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { TodoListState } from '../../../context/TodoListState'
import { StyledFormButtonsContainer, StyledFormContainer, StyledButton, StyledInput } from './StyledForm'

const Form = () => {

  const { task, handleInput, handleSubmit, removeAllTasks } = useContext(TodoListState)

  return (
    <StyledFormContainer onSubmit={handleSubmit} >
      <StyledInput placeholder='Add something you have to do today...' value={task.content} onChange={handleInput} />
      <StyledFormButtonsContainer>
        <StyledButton 
          type='submit'
          initial={{color: 'green'}}
          transition={{
            duration: 0.2,
            ease: 'easeInOut'
          }}
          whileTap={{
            scale: 0.8,
            color: "#0f400f"
          }}
        >
          <IoIosAddCircleOutline/>
        </StyledButton>
        <StyledButton 
          onClick={removeAllTasks}
          initial={{color: 'red'}}
          transition={{
            duration: 0.2,
            ease: 'easeInOut'
          }}
          whileTap={{
            scale: 0.8,
            color: "#6f0c0c"
          }}
        >
          <BsTrash />
        </StyledButton>
      </StyledFormButtonsContainer>
    </StyledFormContainer>
  )
}

export default Form