import '../Styles/App.css';
import FunctionComponent from '../Components/FunctionComponent';
import ClassComponent from '../Components/ClassComponent';

function App() {
  return (
    <div className="App">
      <h3>Convidados</h3>
      <ul>
        <ClassComponent nome="Renato" estaNaLista={true} />
        <ClassComponent nome="Reinaldo" estaNaLista={true} />
        <ClassComponent nome="Juliana" estaNaLista={true} />
      </ul>
      <h3>Falta Convidar</h3>
      <ul>
        <ClassComponent nome="Guilherme" estaNaLista={false} />
        <ClassComponent nome="Bruna" estaNaLista={false} />
        <ClassComponent nome="Camila" estaNaLista={false} />
      </ul>
      <h3>Tarefa</h3>
      <ul>
        <FunctionComponent nome="Renato" tarefa="batata-frita" />
        <FunctionComponent nome="Reinaldo" tarefa="pizza" />
        <FunctionComponent nome="Juliana" tarefa="bebidas" />
      </ul>
    </div>
  );
}

export default App;
