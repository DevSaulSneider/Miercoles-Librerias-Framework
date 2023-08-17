import logo from './logo.svg';
import './App.css';
import { Mi_Titulo } from './componentes/PrimerComponente';
import { Mi_componente } from './componentes/SegundoComponente';

function App() {
  return (
    <div className="App">
      <h1>Crack The Code</h1>
      <Mi_Titulo />
      <Mi_componente />
    </div>
  );
}

export default App;
