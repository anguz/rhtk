import './App.css';
import LoadingOriginal from './components/Loading';
import Loading from './components/LoadingHook';

function App() {

  // Se agrega estilo para el componente
  const componentLoadingOriginalStyle = {
    color: 'yellow',
  };

  const componentLoadingStyle = {
    color: 'red',
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          App
        </p>
        <div style={componentLoadingOriginalStyle}>
          {/* Componente original */}
          <LoadingOriginal title="Hello Word"/>
        </div>
        <div style={componentLoadingStyle}>
          {/* Componente Hook */}
          <Loading title="Hello Word"/>
        </div>
      </header>
    </div>
  );
}

export default App;
