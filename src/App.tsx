import { useState } from 'react'
import { FilmsList } from './components/FilmsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FilmsList/>
    </>
  )
}

export default App
