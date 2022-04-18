import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import Projects from "./components/Projects";
import Technologies from './components/Technologies';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Projects />
      <Technologies />
    </div>
    </BrowserRouter>
  );
}

export default App;
