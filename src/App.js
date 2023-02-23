import './App.css';
import Header from './Header.js';
import Menu from './Menu.js';
import Btn from './Button.js'

function App() {
  let dark = true;
  let colorChange = () => {
      console.log({dark});
  }
  return (
  <div>
  <Header />
  <Menu firstName="Me" children={ <Btn /> } onClick={colorChange}/>
  </div>
  )
}

export default App;