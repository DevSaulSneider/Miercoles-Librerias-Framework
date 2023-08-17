import logo from './logo.svg';
import './App.css';
import { Mi_Titulo } from './componentes/PrimerComponente';
import { Mi_componente } from './componentes/SegundoComponente';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar props={{homeUrl: '#', logoSrc: require("./assets/img/logo.png"), tituloWeb:"Mi Pagina en REACT", loginUrl:"#"}}/>
      <h1>Crack The Code</h1>
      <Mi_Titulo />
      <Mi_componente />
    </div>
  );
}

export default App;
