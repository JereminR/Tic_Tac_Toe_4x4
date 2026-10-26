import { useState } from 'react'
import './App.css'
import {Board} from './components/Board.jsx'
import {turns} from './logic/constants.js'
import {checkWinner} from './logic/boardResults.js'
import {WinnerScreen} from './components/WinnerScreen.jsx'
import {RestartGameButton} from './components/RestartGameButton.jsx'
import {saveLocalStorageGame, deleteLocalStorageGame} from './logic/localStorage/index.js'

function App() {

  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('boardStorage')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(16).fill(null);
  })
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turnStorage')
    return turnFromStorage ? JSON.parse(turnFromStorage) : turns.X;
  })
  const [winner, setWinner] = useState(()=>{
    const winnerFromStorage = window.localStorage.getItem('winnerStorage')
    return winnerFromStorage !== null ? JSON.parse(winnerFromStorage) : null;
  })

  //Updates the game board when you place a token
  const updateBoard = (index)=>{
    if (board[index] || winner) return

    //Update board
    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard);
   
    //Change turn
    const newTurn = (turn === turns.X ? turns.O : turns.X)
    setTurn(newTurn);

    //Set winner or draw
    const newWinner = checkWinner(newBoard);
    setWinner(newWinner);
    
    //Save board, turn and winner of the game
    saveLocalStorageGame(newBoard, newTurn, newWinner);
  }

  //Reset the game to its original value (in blank), erasing the local storage data
  const resetGame = ()=>{
    setBoard(Array(16).fill(null))
    setTurn(turns.X)
    setWinner(null)

    deleteLocalStorageGame();
  }

  return (
    <>
      <main>
        <div className='flex flex-col justify-center items-center px-4'>
          <h1> Tic-Tac-Toe <span className='text-colorAcentPrimary'>4x4</span> </h1>
          <p> The first player to get 4 in a row wins </p>
        </div>
        <RestartGameButton resetGame={resetGame}></RestartGameButton>
        <Board board={board} turn={turn} turns={turns} updateBoard={updateBoard}></Board>
        <WinnerScreen winner={winner} resetGame = {resetGame}></WinnerScreen>
      </main>
      
    </>
  )
}

export default App
