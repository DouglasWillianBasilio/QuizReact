import { createContext, useReducer } from "react";
import questions from '../data/questions'

// Definimos as possíveis etapas do jogo
const STAGES = ["Start", "Playing", "End"]

// Definimos o estado inicial da aplicação
const initialState = {
    gameStage: STAGES[0], // Etapa inicial é 'Start'
    questions, // Array de perguntas importado do arquivo de dados
    currentQuestion: 0, // Índice da pergunta atual
    score: 0, // Pontuação do jogador
    answerSelected: false, // Booleano indicando se o jogador selecionou uma resposta
}

// Definimos a função reducer, que irá atualizar o estado da aplicação de acordo com as ações
const quizReducer = (state, action) => {
    switch(action.type) {
        // Caso a ação seja 'CHANGE_STATE', atualizamos a etapa do jogo para 'Playing'
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            }

        // Caso a ação seja 'REORDER_QUESTIONS', reordenamos o array de perguntas de forma aleatória
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() -0.5;
            })    

            return {
                ...state,
                questions: reorderedQuestions,
            };

        // Caso a ação seja 'CHANGE_QUESTION', avançamos para a próxima pergunta ou finalizamos o jogo
        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false
                
            if(!questions[nextQuestion]) { // Se não houver mais perguntas, finalizamos o jogo
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage, // Se o jogo acabou, mudamos a etapa para 'End'
                answerSelected: false, // Resetamos a seleção de resposta
            }

        // Caso a ação seja 'NEW_GAME', reiniciamos o jogo com o estado inicial
        case "NEW_GAME":
            return initialState;

        // Caso a ação seja 'CHECK_ANSWER', atualizamos a pontuação do jogador e a seleção de resposta
        case "CHECK_ANSWER":
            if(state.answerSelected) return state; // Se já foi selecionada uma resposta, não fazemos nada

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if(answer === option) correctAnswer = 1; // Se a resposta estiver correta, adicionamos 1 à pontuação

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }

        default:
            return state;
    }
}

// Criamos o contexto do quiz
export const QuizContext = createContext()

// Criamos o provider do quiz, que irá disponibilizar o estado e a função dispatch para os componentes filhos
export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);
    
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};
