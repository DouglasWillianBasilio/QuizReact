// Importa o hook useContext e o contexto QuizContext
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

// Importa o estilo CSS do componente Option
import "./Option.css"

// Cria o componente Option
const Option = ({option, selectOption, answer}) => {

    // Extrai o estado e a função dispatch do contexto QuizContext usando o hook useContext
    const [quizState, dispatch] = useContext(QuizContext)

    // Renderiza o componente
    return (
    <div className={`option ${quizState.answerSelected && option === answer ? 'correct' : ""
    }${
        quizState.answerSelected && option !== answer ? 'wrong' : ""}
    `} 
    onClick={() => selectOption()}>

        <p>{option}</p>
    </div>
  )
}

// Exporta o componente Option
export default Option;
