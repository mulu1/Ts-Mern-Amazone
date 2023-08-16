import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <hearder>Amazone shop</hearder>
      <main>Shop here</main>
      <footer>All rights reserved</footer>
    </div>
  )
}

export default App
