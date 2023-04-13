// Importando hooks e componentes do React
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome'
import Question from './components/Question';
import GameOver from './components/GameOver';
import './App.css'

// Componente principal do aplicativo Quiz
function App() {
  // Utilizando o hook useContext para acessar o contexto QuizContext
  const [quizState, dispatch] = useContext(QuizContext)

  // Utilizando o hook useEffect para executar a função passada como primeiro argumento apenas uma vez, 
  // no momento em que o componente App é montado
  useEffect(() => {
    // Enviando uma ação para o reducer responsável por alterar o estado do jogo, 
    // para reorganizar as perguntas aleatoriamente.
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  // Retornando a estrutura HTML com base no estado do jogo
  return (
    <div className="App">
      <h1>Quiz de Programacao</h1>
      {/* Mostrando o componente Welcome se o estado do jogo é "Start" */}
      {quizState.gameStage === "Start" && <Welcome />}
      {/* Mostrando o componente Question se o estado do jogo é "Playing" */}
      {quizState.gameStage === "Playing" && <Question />}
      {/* Mostrando o componente GameOver se o estado do jogo é "End" */}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

// Exportando o componente App como padrão
export default App
