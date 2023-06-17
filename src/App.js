import photo from './mayuu.jpeg';
import linkedinIcon from './linkedin.svg'
import githubIcon from './github.svg'
import './App.css';

function App() {
  return (
    <div className="bg-violet-500 h-screen w-screen font-mono">
      <header className="text-base flex place-content-between">
        <h1 className="font-mono hover:bg-red-300 text-4xl"> Cinthya Mayumi Kuniyoshi</h1>
        <div className='flex self-end space-x-4 text-2xl'>
          <a href="" className='hover:bg-red-300'>Sobre mim</a>
          <a href="" className='hover:bg-red-300'>Projetos</a>
          <a href="" className='hover:bg-red-300'>Onde me encontrar</a>
        </div>
      </header>
      <div className="text-lg flex place-content-between">
        <h1 className='flex self-center bg-red-300'>Hi! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis massa non magna laoreet, ut tristique velit pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vitae sodales lacus. Phasellus ultrices in elit eget pellentesque. Nam eu sollicitudin lorem. Fusce quis ultrices nunc, quis auctor justo. </h1>
        <img src={photo} id="photo" className='w-80 rounded-full border-dotted border-4 border-red-300 hover:bg-red-300'/>
      </div>
      <div className='flex space-x-4 justify-center'>
        <a href="https://github.com/mayukuni">
          <img src={githubIcon} id="photo" className='w-20 rounded-full border-dotted border-4 border-red-300 hover:bg-red-300'/>
        </a>
        <a href="https://www.linkedin.com/in/mayumikuniyoshi/" >
          <img src={linkedinIcon} id="photo" className='w-20 fill-blue-500 rounded-full border-dotted border-4 border-red-300 hover:bg-red-300'/>
        </a>
      </div>
        <a href="https://mayukuni.github.io/pixels-art/" className='hover:bg-red-300 text-4xl bg-red-300'>Pixels Art</a>
    </div>
  );
}

export default App;
