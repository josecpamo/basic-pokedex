import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <section className="container">
          <article className="pokemons">
            <Card
              url="pokeball.svg"
              name="Pokedex"
            />
          </article>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
