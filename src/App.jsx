import { useState } from 'react'
import './App.css'
import './global.css'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1>Accordion Component</h1>
      <div className="content">
        <Accordion 
          title="Заголовок"
          subtitle="Подзаголовок"
          content="Оригинал документа, на основании которого продавец стал собственником квартиры. Например, договор купли-продажи, договор долевого участия, договор дарения и другие (находится у собственника)"
        />
      </div>
    </div>
  )
}

export default App
