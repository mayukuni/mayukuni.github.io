import React from "react";

export default function ProjectCard(props) {
  const { title, image, page, code } = props;

  return (
    <div className="bg-[#FFD2D7] font-montserrat m-12 mx-20 border-2 border-[#FFD2D7] p-10 flex justify-between">
      <div className="flex flex-col justify-between">
        <h1 className="text-8xl text-[#322653]">{title}</h1>
        <div className="flex flex-col">
          <a href={page} className="text-xl text-[#322653]">Link do projeto</a>
          <a href={code} className="text-xl text-[#322653]">Link do código do projeto</a>
        </div>
      </div>
      <img src={image} alt={title} className="w-2/4  rounded-3xl border-4 border-double border-[#9288F8]"/>
    </div>
  );
}