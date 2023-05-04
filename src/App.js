import logo from './logo.svg';
import './App.css';
import Fncomp from './components/Fncomp.js';
import Classcomp from './components/Classcomp';


function App() {
  return (
    <div className="App">
      <h1>Before functional</h1>
      <Fncomp />
      <Classcomp />
    </div>
  );
}

export default App;
