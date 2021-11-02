import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  const NomeEmpresa = 'We Can Code It!';

  return (
    <>
      <Header empresa={NomeEmpresa} />
      <main>
        <Banner >
          <span>Hey, girl </span>
          <p>Venha fazer parte da comunidade e compartilhar aprendizado. Inscreva-se!</p>
          <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" name="nome" id="" placeholder="Seu nome completo" />
            <label htmlFor="">E-mail</label>
            <input type="email" name="email" id="" placeholder="E-mail" />
            <label htmlFor="">GitHub</label>
            <input type="url" name="github" id="" placeholder="Link do seu GitHub" />
            <label htmlFor="">LinkedIn</label>
            <input type="url" name="linkedin" id="" placeholder="Link do seu LinkedIn" />
          </form>
          <button>Inscrever-me</button>
        </Banner>
      </main>
      <Footer empresa={NomeEmpresa}/>
    </>
  );
}

export default App;
