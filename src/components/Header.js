import React from "react";

export default function Header(props) {
  const { home, projects, findme } = props;
  return(
    <header className="fixed w-full">
      <div className=" bg-[#322653] flex place-content-between font-montserrat">
        <h1 className="font-mono hover:bg-[#9288F8] text-5xl p-2 text-[#FFD2D7] font-montserrat"> Cinthya Mayumi Kuniyoshi</h1>
      <div className='flex self-end  space-x-4 text-4xl'>
        <a href={home} className='hover:bg-[#9288F8] p-2 text-[#FFD2D7]'>Sobre mim</a>
        <a href={projects} className='hover:bg-[#9288F8] p-2 text-[#FFD2D7]'>Projetos</a>
        <a href={findme} className='hover:bg-[#9288F8] p-2 text-[#FFD2D7]'>Onde me encontrar</a>
      </div>
        </div>
      <hr className='border-[#9288F8]'/>
    </header>
  )
}