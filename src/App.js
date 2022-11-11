import Header from './Components/Header';
import Footer from './Components/Footer';
import Pokemons from './Components/Pokemons';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <section className="container">
          <article className="pokemons">
            <Pokemons/>
          </article>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
