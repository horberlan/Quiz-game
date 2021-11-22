
import React from 'react'
import { useGlobalContext } from '../Settings'
import Button from '@material-ui/core/Button';
import GlobalStyle from './GlobalStyle';
import TextField from '@material-ui/core/TextField';
import { createGlobalStyle } from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  textAlign:'center',
  position: 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #31687f',
  boxShadow: 24,
  p: 4,
};


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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  async function refreshPage() {
    window.location.reload();  }
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
         
          <Button onClick={handleOpen}>Start Game</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    Are you ready?
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Button  style={{margin:"0 10px"}} variant="outlined" color="primary" onClick={handleSubmit}>start</Button>
    <Button  style={{margin:"0 10px"}}
     variant="outlined" color="error" value="Refresh Page" onClick={refreshPage} >
        Cancel </Button>
    </Typography>
  </Box>
</Modal>
        </form>
      </section>
      
    </>
  )
}

export default Form