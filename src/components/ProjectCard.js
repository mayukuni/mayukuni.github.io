import React from "react";

export default function ProjectCard(props) {
  const { title, func, page, video } = props;

  return (
    <div className="bg-[#697565] font-montserrat m-12 mx-20 border-2 border-[#697565] p-10 flex justify-between">
      <div className="flex flex-col justify-between">
        <h1 className="text-xxl text-[#ECDFCC]">{title}</h1>
        <h2 className="text-3xl text-[#ECDFCC]">Função: {func}</h2>
        <div className="flex flex-col">
          <a href={page} className="text-2xl text-[#1E201E] hover:text-[#ECDFCC]">Link do projeto no Youtube</a>
        </div>
      </div>
      {/* <img src={image} alt={title} className="w-2/4  rounded-3xl border-4 border-double border-[#1E201E]"/> */}
      <iframe width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  className="w-2/4  rounded-3xl border-4 border-double border-[#1E201E]"allowfullscreen></iframe>
    </div>
  );
}