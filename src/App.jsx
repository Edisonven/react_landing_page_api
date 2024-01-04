
import "./App.css";
import MiApi from "./components/MiApi";
function App() {
  return (
    <div className="container">
      <header className="header">
        <img className="header__img" src="./src/assets/imgs/ramlogo.png" alt="" />
        <h1 className="header__title">API</h1>
      </header>
      <section className="section">
        <MiApi></MiApi>
      </section>
    </div>
  );
}

export default App;
