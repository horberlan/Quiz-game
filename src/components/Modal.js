import React from 'react'
import { useGlobalContext } from '../Settings'
import Button from '@material-ui/core/Button';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 3s;
  z-index: -1;
}
.isOpen {
  opacity: 1;
  z-index: 999;
}

.modal-content {
  border-radius: 28px;
  background: #ffffff;
  opacity:.8;
  width: 50vw;
  max-width: 100vw;
  padding: 3rem;
  border-radius: 28px;
  text-align: center;
  position: relative;
}
.modal-content p {
  font-size: 1.5rem;
  text-transform: none;
}

`;
const Modal = () => {

  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    
    <div className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
      <GlobalStyle/>
      <div className="modal-content">
        <h2>Congratulations!
        
        </h2>
        <p>
          you answered {((correct / questions.length) * 100).toFixed(0)}% of the correct questions
        </p>
        <Button onClick={closeModal}> play again</Button>
       
      </div>
    </div>
  )
}

export default Modal