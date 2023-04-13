// Importa o hook useContext e o contexto QuizContext
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

// Importa o componente Option
import Option from './Option';

// Importa o estilo CSS do componente Question
import './Question.css';

// Cria o componente Question
const Question = () => {
  
    // Extrai o estado e a função dispatch do contexto QuizContext usando o hook useContext
    const [quizState, dispatch] = useContext(QuizContext)

    // Obtém a pergunta atual a ser exibida com base no estado do quiz
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    // Cria a função para selecionar uma opção e enviar a resposta para checagem
    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER", 
            payload: {answer: currentQuestion.answer, option },
        })
    }

    // Renderiza o componente
    return (
    <div id="question">
        
         
        <p>Pergunta de {quizState.currentQuestion +1} de {quizState.questions.length}</p>
        
        
        <h2>{currentQuestion.question}</h2>
        
       
        <div id="options-container">
            {currentQuestion.options.map((option) => (
                <Option option={option} 
                key={option}
                answer={currentQuestion.answer}
                selectOption={() => onSelectOption(option)}
                 />
            ))}
        </div>

        
        {quizState.answerSelected && (
            <button onClick={() => dispatch ({ type:"CHANGE_QUESTION"})}>Continuar </button>
        )}
    </div>
    );
}

// Exporta o componente Question
export default Question;
