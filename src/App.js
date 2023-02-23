import './App.css';
import Header from './Header.js';
import Menu from './Menu.js';
import Btn from './Button.js'

function App() {
  return (
  <div>
  <Header />
  <Menu firstName="Me" children={ <Btn /> }/>
  </div>
  )
}

export default App;