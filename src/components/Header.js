import React from "react";

export default function Header(props) {
  const { home, projects, findme } = props;
  return(
    <header className="fixed w-full">
      <div className=" bg-[#1E201E] flex place-content-between font-montserrat">
        <h1 className="font-mono mx-8 hover:bg-[#ECDFCC] hover:text-[#1E201E] text-6xl p-2 text-[#ECDFCC] font-sans font-bold"> Arthur Orcy</h1>
      <div className='flex self-end  space-x-4 text-4xl'>
        <a href={home} className='hover:bg-[#ECDFCC] hover:text-[#1E201E] p-2 text-[#ECDFCC]'>Sobre mim</a>
        <a href={projects} className='hover:bg-[#ECDFCC] hover:text-[#1E201E] p-2 text-[#ECDFCC]'>Projetos</a>
        <a href={findme} className='hover:bg-[#ECDFCC] hover:text-[#1E201E] p-2 text-[#ECDFCC]'>Onde me encontrar</a>
      </div>
        </div>
      <hr className='border-[#697565]'/>
    </header>
  )
}