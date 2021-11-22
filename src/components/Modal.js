import React from 'react'
import { useGlobalContext } from '../Settings'
import Button from '@material-ui/core/Button';

const Modal = () => {

  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <div className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
      
      <div className="modal-content">
        <h2>congrats
        
        </h2>
        <p>
          you answered {((correct / questions.length) * 100).toFixed(0)}% of questions correctly
        </p>
        <Button variant="contained" onClick={closeModal}> play again</Button>
       
      </div>
    </div>
  )
}

export default Modal