import "./App.css";
import Introduction from "./components/Introduction";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div className="App-div">
        <Introduction></Introduction>
        <About></About>
        <header className="quote">Future is bright!</header>
      </div>
    </div>
  );
}

export default App;
