import { useState } from 'react'
import './App.css'
import './global.css'
import Accordion from './components/Accordion'
import Tabs from './components/Tabs'
import Cards from './components/Cards'
import Banners from './components/Banners'
import DropdownButton from './components/DropdownButton'
import Input from './components/Input'
import Checkbox from './components/Checkbox'
import SearchBox from './components/SearchBox'
import Textarea from './components/Textarea'

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
      
      <h1>Tabs Component</h1>
      <div className="content">
        <Tabs />
      </div>

      <h1>Cards Component</h1>
      <div className="content">
        <Cards />
      </div>

      <h1>Banners Component</h1>
      <div className="content">
        <Banners />
      </div>

      <h1>Dropdown Button Component</h1>
      <div className="content">
        <DropdownButton />
      </div>

      <h1>Input Component</h1>
      <div className="content">
        <Input />
      </div>

      <h1>Checkbox Component</h1>
      <div className="content">
        <Checkbox />
      </div>

      <h1>SearchBox Component</h1>
      <div className="content">
        <SearchBox />
      </div>

      <h1>Textarea Component</h1>
      <div className="content">
        <Textarea />
      </div>
    </div>
  )
}

export default App
