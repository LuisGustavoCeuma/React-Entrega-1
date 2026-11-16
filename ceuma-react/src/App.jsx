import './App.css'
import Card from './components/Card/Card.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Lista from './components/Lista/Lista.jsx'

function App() {

  return (
    <>
      <Header/>
      <Card title='Titulo' text='Texto do card'/>
      <Lista elementos={['Html', 'Css', 'JavaScript']}/>
      <Footer/>
    </>
  )
}

export default App
