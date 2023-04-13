// react, componentes, estaticos
import { useContext } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome'
import Question from './components/Question';

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="App">
      <h1>Quiz de Programacao</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  )
}

export default App
