import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg"

import "./GameOver.css"

const GameOver = () => {
    // Define o contexto do quiz e o dispatcher para atualizar o estado global
    const [quizState, dispatch] = useContext(QuizContext);
  
    // Renderiza o componente do fim do jogo
    return (
        <div id="gameover">
            <h2>Fim de Jogo</h2>
            {/* Exibe a pontuação do usuário */}
            <p>Pontuacao: {quizState.score}</p>
            {/* Exibe quantas perguntas foram acertadas de um total de perguntas */}
            <p>Voce acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
            {/* Exibe uma imagem para indicar que o quiz acabou */}
            <img src={WellDone} alt="Fim do Quiz" />
            {/* Botão para iniciar um novo jogo, que envia uma ação "NEW_GAME" para o dispatcher */}
            <button onClick={() => dispatch ({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    );
}

export default GameOver;
