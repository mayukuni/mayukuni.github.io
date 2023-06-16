import photo from './mayuu.jpeg';
import './App.css';

function App() {
  return (
    <div className="bg-violet-500 h-screen">
  <header>
    <a href="" id="title">Mayumi Kuniyoshi</a>
    <div>
      <a href="">Sobre mim</a>
      <a href="">Portfólio</a>
      <a href="">Onde me encontrar</a>
    </div>
  </header>
  <div className="text-2xl flex">
    <h1 className='flex items-center'>Hi!</h1>
      <ul className='flex items-end space-x-4'>
        <li><a href="https://github.com/mayukuni">Github</a></li>
        <li><a href="https://twitter.com/mayukyuumi">Twitter</a></li>
        <li><a href="https://www.instagram.com/mayu_kuni/">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/mayumikuniyoshi/"><em>Linkedin</em></a></li>
      </ul>
      <img src={photo} id="photo" className='w-80 rounded-full border-dotted border-4 border-yellow-400'/>
  </div>
    </div>
  );
}

export default App;
