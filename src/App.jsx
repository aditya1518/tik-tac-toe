import { useState } from 'react'


import './App.css'
import TicTacToe from './component/TicTacToe/TicTacToe'
function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
        <TicTacToe></TicTacToe>
      </div>
  )
}

export default App
