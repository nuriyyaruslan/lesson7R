import './App.css';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit counter app</h1>
      <Gallery/>
      <Counter/>
      <About/>
    </div>
  );
}

export default App;
