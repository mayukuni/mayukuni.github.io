import React from "react";

export default function Header() {
  return(
    <header className="text-base flex place-content-between font-montserrat">
      <h1 className="font-mono hover:bg-[#9288F8] text-5xl p-2 text-[#FFD2D7] font-montserrat"> Cinthya Mayumi Kuniyoshi</h1>
      <div className='flex self-end  space-x-4 text-4xl'>
        <a href="" className='hover:bg-[#9288F8] p-2 text-[#FFD2D7]'>Sobre mim</a>
        <a href="" className='hover:bg-[#9288F8] p-2 text-[#FFD2D7]'>Projetos</a>
        <a href="" className='hover:bg-[#9288F8] p-2 text-[#FFD2D7]'>Onde me encontrar</a>
      </div>
    </header>
  )
}