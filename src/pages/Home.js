import React from 'react';
import photo from '../mayuu.png';
import pixelsArtIMG from '../pixelart.png';
import linkedinIcon from '../linkedin.svg'
import githubIcon from '../github.svg'
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
      <div id='home' className="bg-[#322653] w-screen p-10 px-20 font-montserrat ">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
        <hr className='border-[#9288F8]'/>
        <div className="text-xl flex justify-between my-12">
          <div className='w-3/4 text-[#322653] p-10 bg-[#FFD2D7] mx-20 border-2 border-[#FFD2D7]'>
            <p className='my-1'>Atualmente estou no terceiro semestre de Ciência da computação na faculdade Impacta.</p>
            <p className='my-1'>Em 2023 finalizei um curso de Desenvolvimento Web na Trybe e um curso de UX Design da Google na plataforma Coursera.</p>
            <p className='my-1'>Durante os cursos e a graduação, tive experiências individuais e em grupo com HTML, CSS, JavaScript, TypeScript, Python, React, NodeJS, MySQL, MongoDB, Sequelize, Docker, Git, Figma, Kanban e Scrum.</p>
            <p className='my-1'>Já cursei Artes Visuais na UFG mas tive que trancar o curso e voltar para São Paulo por motivos familiares. Trabalhei na feira com a minha família e administrei um pequeno negócio. No início desse ano tive uma breve (e incrível) experiência como barista, mas tive que sair para focar nos estudos.</p>
            <p className='my-1'>Fiz trabalho voluntário em “Corrente do bem - Escreva cartas para um idoso” - Associação Keralty.</p>
          </div>
          <a href="https://www.linkedin.com/in/mayumikuniyoshi/" className='w-1/4 mx-20 rounded-full'>
            <img src={photo} id="photo" className='rounded-full flex border-2 border-[#FFD2D7] hover:border-[#9288F8]'/>
          </a>
        </div>
        <hr className='border-[#9288F8]' id='projects'/>
        <div className='my-10'>
          <h1 className='text-5xl text-[#FFD2D7] mx-20'>Projetos</h1>
          <ProjectCard 
            title="Pixel Art"
            image={pixelsArtIMG}
            page="https://mayukuni.github.io/pixels-art/"
            code="https://github.com/mayukuni/pixels-art"
            />
          <ProjectCard />
          <ProjectCard />
        </div>
        <hr className='border-[#9288F8]' id='findme'/>
        <div className='my-10'>
          <h1 className='text-5xl text-[#FFD2D7] mx-20'>Onde me encontrar</h1>
          <div className='flex justify-around bg-[#FFD2D7] p-10 bg-[#FFD2D7] my-10 mx-20 border-2'>
          <a href="https://github.com/mayukuni">
            <img src={githubIcon} id="photo" className='w-20 rounded-full bg-[#FFD2D7] border-2 border-[#FFD2D7] hover:bg-[#9288F8] color-red '/>
          </a>
          <a href="https://www.linkedin.com/in/mayumikuniyoshi/" >
            <img src={linkedinIcon} id="photo" className='w-20  border-2 bg-[#FFD2D7] border-[#FFD2D7] hover:bg-[#9288F8] rounded-lg '/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
