import './App.css';

import Banner from './Components/Banner';
import Header from './Components/Header';


function App() {

  const imagem = 'https://cutewallpaper.org/21/van-wallpaper/Road-Trip-Wallpaper-2018-Res-2048x1536-.jpg'
  const empresa = "Let's Go";
    
  return (
    <>
    <Header empresa={empresa}/>
    <Banner imagem={imagem} />
    </>
  );
}

export default App;
