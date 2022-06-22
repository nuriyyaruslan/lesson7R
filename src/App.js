import './App.css';
import About from './components/About/About';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit counter app</h1>
      <Counter/>
      <About/>
    </div>
  );
}

export default App;
