import { GlobalStyle } from "./styles";
import "./App.css";
import Movieslist from "./components/Movieslist";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Movieslist />
    </div>
  );
}

export default App;
