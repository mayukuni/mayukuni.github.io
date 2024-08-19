import React from 'react';
import photo from '../image.jpeg';
import instagramLogo from "../instagram.svg"
import whatsappLogo from '../whatsapp.svg'
import '../App.css';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div>
      <Header 
        home="#home"
        projects="#projects"
        findme="#findme"
        />
      <div id='home' className="bg-[#3C3D37] w-screen p-10 px-20 font-montserrat ">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
        <hr className='border-[#1E201E]'/>
        <div className="text-xl flex justify-between my-14 mt-28">
          <div className='w-3/4 text-[#ECDFCC] p-12 bg-[#697565] text-2xl mx-20 border-2 border-[#697565]'>
            <p className='my-1'>   "Beatmaker, Produtor e engenheiro de mixagem, com uma paixão profunda pela música e uma compreensão técnica refinada, sou um produtor musical e engenheiro de mixagem dedicado a trazer o melhor de cada projeto." </p>
            <br/>
            <p>"Com anos de experiência em gravadoras e estúdios, ter trabalhado com nomes expressivos da cultura hip-hop e funk (Krawk, Levinsk, Lele JP, Qualy, etc...), meu objetivo é capturar a essência artística dos músicos e traduzi-la em uma experiência sonora que ressoe com autenticidade e impacto."</p>
          </div>
          <a href="https://www.instagram.com/arthurorcy/" className='w-1/4 mx-20 rounded-full'>
            <img src={photo} id="photo" className='rounded-full flex border-2 border-[#697565] hover:border-[#ECDFCC]'/>
          </a>
        </div>
        <hr className='border-[#1E201E]' id='projects'/>
        <div className='my-10'>
          <h1 className='text-5xl text-[#ECDFCC] mx-20'>Projetos</h1>
          <ProjectCard 
            title="TÁ FÁCIL - Jorge Bask, Square, Krawk, L3K"
            func="Mixagem, Masterização."
            video="https://www.youtube.com/embed/G5yuX2d-qTw"
            page="https://www.youtube.com/watch?v=G5yuX2d-qTw"
          />
          <ProjectCard 
          title="DONA DO LUGAR - Krawk ft. Bask, ANNA"
          func="Mixagem, Masterização."
          video="https://www.youtube.com/embed/vcOG_saqzdA"
          page="https://www.youtube.com/watch?v=vcOG_saqzdA"
          />
          <ProjectCard 
          title="Trilha Sonora - Mc Miller Feat Mc Lele JP"
          func="Beatmaking, Mixagem, Masterização."
          video="https://www.youtube.com/embed/0oWRhJYNYM4"
          page="https://www.youtube.com/watch?v=0oWRhJYNYM4"
          />
          <ProjectCard 
          title="NOVA ERA - DAMASSACLAN (CYPHER 10 ANOS)"
          func="Captação."
          video="https://www.youtube.com/embed/mKx8HdhKGKs"
          page="https://www.youtube.com/watch?v=mKx8HdhKGKs"
          />
          <ProjectCard 
          title="J Walk - Lil Vi (prod. Aluado)"
          func="Mixagem, Masterização."
          video="https://www.youtube.com/embed/-tfQIV9_Hnw"
          page="https://www.youtube.com/watch?v=-tfQIV9_Hnw"
          />
          <ProjectCard 
          title="Solidão - Isack Ramos"
          func="Beatmaking, Mixagem, Masterização."
          video="https://www.youtube.com/embed/zEOVIF4Rnm8"
          page="https://www.youtube.com/watch?v=zEOVIF4Rnm8"
          />
        </div>
        <hr className='border-[#1E201E]' id='findme'/>
        <div className='my-10 flex flex-col items-center'>
          <h1 className='text-5xl text-[#ECDFCC] mb-10'>Onde me encontrar</h1>
          <div className='flex place-content-evenly bg-[#697565] p-10 w-1/4'>
            <a href="https://www.instagram.com/arthurorcy/" className='mx-2'>
              <img src={instagramLogo} id="photo" className='w-20 border-2 border-[#697565] hover:stroke-[#9288F8]'/>
            </a>
            <a href="https://wa.me/5511991340152" className='mx-2'>
              <img src={whatsappLogo} id="photo" className='w-20 border-2 border-[#697565] hover:stroke-[#9288F8]'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
