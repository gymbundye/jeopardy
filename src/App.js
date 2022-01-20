import Jeopardy from './Components/Jeopardy';
import './App.css';
import Points from './Components/Points';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
    
      <Jeopardy/>
      <Points/>
    </div>
  );
}

export default App;
