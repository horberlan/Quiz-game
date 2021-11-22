import React from 'react'
import GlobalStyle, {BtnAnswer,BtnContainer} from './components/GlobalStyle';
import { useGlobalContext } from './context'
import Button from '@material-ui/core/Button';
import Form from './components/Questions';
import Loading from './Loading';
import Modal from './Modal';
import Sounds from './components/Sound';
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()

  if(waiting) {
    return <Form />
  }

  if(loading) {
    return <Loading />
  }

  const { question, incorrect_answers, correct_answer } = questions[index]
  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }

  
  return (
    <>

      <Modal />
      <GlobalStyle/>
      
      <section className="quiz">
        <p className="correct-answer">
          correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          
          <BtnContainer>
            {answers.map((answer, index) => {
              return (
                <BtnAnswer 
                  key={index} 
                  className="BtnAnswer" 
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </BtnContainer>
        </article>

        <Button variant="outlined" color="primary" 
        style={{margin:"0 10px"}}
        onClick={nextQuestion}>next</Button>
        <Button variant="outlined" color="secondary" >
        Cancel
      </Button>
      <Sounds/>
      </section>
    
    </>
  )
}

export default App