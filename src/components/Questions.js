
import React from 'react'
import { useGlobalContext } from '../Settings'
import Button from '@material-ui/core/Button';
import GlobalStyle from './GlobalStyle';
import TextField from '@material-ui/core/TextField';
import { createGlobalStyle } from 'styled-components';

const Formstyle = createGlobalStyle`

.setup h2 {
  margin-bottom: 2rem;
}
.form {
  margin-bottom: 2rem;
}
.form label {
  display: block;
  text-transform: capitalize;
  font-weight: 500;
  color: #31687f;
  margin-bottom: 0.5rem;

}

`;

const Form = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()

  return (
    <>
      <GlobalStyle/>
      <Formstyle/>
      <section className="quiz quiz-mobile">          
        <form className="setup">
          <h2>Lets Play... a Quiz game?</h2>         
            
          <div className="form">
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