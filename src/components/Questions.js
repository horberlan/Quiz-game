
import React from 'react'
import { useGlobalContext } from '../Settings'
import Button from '@material-ui/core/Button';
import GlobalStyle from './GlobalStyle';
import TextField from '@material-ui/core/TextField';


const Form = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()

  return (
    <>
      <GlobalStyle/>
      <section className="quiz quiz-small">          
        <form className="setup-form">
          <h2>Lets Play... a Quiz game?</h2>         
            
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <TextField
          label="1-50"
          type="number"
          name="amount" 
              id="amount" 
              value={quiz.amount} 
              onChange={handleChange} 
              min="1" 
              max="50"
          InputLabelProps={{
            shrink: true,
          }}
        />
          </div>

          {error && (
            <p className="error">
              Please try different options
            </p>
          )}
          <Button variant="outlined" color="primary" onClick={handleSubmit}>start</Button>
        </form>
      </section>
      
    </>
  )
}

export default Form