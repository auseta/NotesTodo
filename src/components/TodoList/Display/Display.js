import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { TodoListState } from "../../../context/TodoListState";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { StyledUl, StyledLi, StyledButtonsContainer, StyledButton } from "./StyledDisplay";

const Display = () => {
  const { tasksList, removeTask } = useContext(TodoListState);

  return (
    <StyledUl>
      <AnimatePresence>
        {
          tasksList !== [] && tasksList.map((task) => {
            return (
              <StyledLi
                key={task.id}
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ x: -2000 }}
                transition={{ duration: .5 }}
              >
                {task.content} 
                <StyledButtonsContainer>
                  <StyledButton>
                    <BsCheckLg />
                  </StyledButton> 
                  <StyledButton delete onClick={() => removeTask(task.id)}>
                    <BsXLg />
                  </StyledButton>
                </StyledButtonsContainer>
              </StyledLi>
            )})
        }
      </AnimatePresence>
    </StyledUl>
  );
};

export default Display;
