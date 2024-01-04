
import "./App.css";
import MiApi from "./components/MiApi";
function App() {
  return (
    <div className="container">
      <img className="container__fondo" src="./src/assets/imgs/fondo_2_copia.jpeg" alt="" />
      <header className="header">
        <img className="header__img" src="./src/assets/imgs/ramlogo.png" alt="" />
        <h1 className="header__title">API INFO</h1>
      </header>
      <section className="section">
        <MiApi></MiApi>
      </section>
    </div>
  );
}

export default App;
