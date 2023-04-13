import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Question.css';

const Question = () => {
  
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]


    return (
    <div id="question">
        <p>Pergunta de {quizState.currentQuestion +1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="optons-container">
            <p>Opcoes</p>
        </div>
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
    );
}

export default Question