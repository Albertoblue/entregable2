import { useState } from 'react'
import './App.css'
import PresentationSlider from './components/PresentationSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PresentationSlider/>
    </>
  )
}

export default App
