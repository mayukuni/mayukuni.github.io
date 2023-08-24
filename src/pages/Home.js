import React from 'react';
import photo from '../mayuu.png';
import linkedinIcon from '../linkedin.svg'
import githubIcon from '../github.svg'
import '../App.css';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="bg-[#322653] h-screen w-screen p-10 px-20 font-montserrat">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      <Header />
      <hr className='border-[#9288F8]'/>
      <div className="text-2xl flex justify-between my-12">
        <h1 className='flex self-center w-2/4 p-6 bg-[#FFD2D7] rounded-lg py-20'>Hi! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis massa non magna laoreet, ut tristique velit pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vitae sodales lacus. Phasellus ultrices in elit eget pellentesque. Nam eu sollicitudin lorem. Fusce quis ultrices nunc, quis auctor justo. </h1>
        <img src={photo} id="photo" className='w-1/4 rounded-full border-dotted border-4 border-[#FFD2D7] hover:border-[#9288F8] mx-20'/>
      </div>
      <ProjectCard />
        <a href="https://mayukuni.github.io/pixels-art/" className='hover:bg-red-300 text-4xl bg-red-300'>Pixels Art</a>
      <div className='flex space-x-4 justify-center rounded-lg p-4 '>
        <a href="https://github.com/mayukuni">
          <img src={githubIcon} id="photo" className='w-20 rounded-full bg-[#FFD2D7] border-2 border-[#FFD2D7] hover:bg-[#9288F8] '/>
        </a>
        <a href="https://www.linkedin.com/in/mayumikuniyoshi/" >
          <img src={linkedinIcon} id="photo" className='w-20  border-2 bg-[#FFD2D7] border-[#FFD2D7] hover:bg-[#9288F8] rounded-lg '/>
        </a>
      </div>
    </div>
  );
}
