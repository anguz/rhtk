import './App.css';
import Loading from './components/Loading';

function App() {

  // Se agrega estilo para el componente
  const componentStyle = {
    color: 'yellow',
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          App
        </p>
        <div style={componentStyle}>
          {/* Componente original */}
          <Loading title="Hello Word"/>
        </div>
      </header>
    </div>
  );
}

export default App;
