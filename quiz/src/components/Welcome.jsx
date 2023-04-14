// Importa o hook useContext e o contexto QuizContext
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

// Importa a imagem do quiz
import Quiz from "../img/quiz.svg";

// Importa o estilo CSS do componente Welcome
import "./Welcome.css";

// Cria o componente Welcome
const Welcome = () => {
  
  // Extrai o estado e a função dispatch do contexto QuizContext usando o hook useContext
  const [quizState, dispatch] = useContext(QuizContext)

  // Renderiza o componente
  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        
        
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button> 
        
        
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

// Exporta o componente Welcome
export default Welcome;
