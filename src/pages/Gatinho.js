import React, { useState } from 'react';
import '../App.css';

export default function Gatinho() {
  const [showCard, setShowCard] = useState(false);
  const [hearts, setHearts] = useState([]);

  const loveCode = `
  hearts = []
  
  def add_heart():
      hearts.append("❤️")
      print("Mais um coração para você!")
  
  while True:
      add_heart()
      print("Te amo mais a cada dia!")
  `;

  const birthdayWishes = [
    "Tenho muito orgulho de namorar uma pessoa tão incrível como você",
    "Eu fico brava as vezes mas é porque eu me preocupo",
    "Parabéns pelas suas conquistas"
  ];

  return (
    <div className="bg-gradient-to-b from-[#322653] to-[#1a1a2e] w-screen min-h-screen p-10 px-20 font-montserrat overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      
      {!showCard ? (
        // Botão inicial
        <div className="flex items-center justify-center min-h-screen">
          <button
            onClick={() => setShowCard(true)}
            className="bg-[#FFD2D7] text-[#322653] px-8 py-4 rounded-full text-2xl font-bold transform transition-all duration-300 hover:scale-110 hover:bg-[#9288F8] flex items-center gap-2 shadow-lg hover:shadow-xl border-4 border-[#322653] hover:border-[#FFD2D7] animate-bounce-slow"
          >
            <span className="animate-wiggle">🎁</span>
            O que será que tem aqui?
            <span className="animate-wiggle">🎁</span>
          </button>
        </div>
      ) : (
        // Conteúdo do cartão
        <div className="relative z-10">
          {/* Confetti effect */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#FFD2D7] rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Spinning hearts in corners */}
          <div className="absolute top-4 left-4 text-4xl animate-spin-slow">❤️</div>
          <div className="absolute top-4 right-4 text-4xl animate-spin">💖</div>
          <div className="absolute bottom-4 left-4 text-4xl animate-spin-slow">💕</div>

          {/* Title with animation */}
          <div className="flex justify-center items-center mb-8">
            <h1 className="text-6xl text-[#FFD2D7] text-center animate-bounce">
              Feliz Aniversário, gatinhoo! <span className="inline-block animate-spin-slow">🎉</span>
            </h1>
          </div>

          {/* Main card with hover effects */}
          <div className="relative bg-[#FFD2D7] p-10 rounded-lg max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="text-center">
              {/* Code snippet */}
              <div className="bg-[#322653] p-4 rounded-lg mb-6 text-left font-mono text-[#FFD2D7] overflow-x-auto">
                <pre>{loveCode}</pre>
              </div>

              {/* Interactive button */}
              <div className="mb-6 text-center">
                <button
                  onClick={() => setHearts([...hearts, "❤️"])}
                  className="bg-[#322653] text-[#FFD2D7] px-6 py-3 rounded-lg text-xl font-bold transform transition-all duration-300 hover:scale-105 hover:bg-[#9288F8] shadow-md hover:shadow-lg"
                >
                  Clica aqui pra ver mais amor ❤️
                </button>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {hearts.map((heart, index) => (
                    <span key={index} className="text-3xl animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                      {heart}
                    </span>
                  ))}
                </div>
              </div>

              {/* Birthday wishes */}
              <div className="space-y-4 mb-6">
                {birthdayWishes.map((wish, index) => (
                  <p key={index} className="text-[#322653] text-xl animate-fade-in" style={{ animationDelay: `${index * 0.5}s` }}>
                    {wish}
                  </p>
                ))}
              </div>

              <p className="text-[#322653] text-2xl font-bold mt-8 animate-bounce">
                Te amo muito! <span className="inline-block animate-spin-slow">🐱</span><span className="inline-block animate-spin">❤️</span>
              </p>
            </div>
          </div>

          {/* Floating hearts */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 