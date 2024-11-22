import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[url('/img/BackgroundJava.jpg')] text-white">
      <Navbar />
      <main className="bg-[#00000052] flex-grow flex items-center px-4 py-8 md:py-0">
        <div className="rounded-[50px] px-4 py-4 font-montserrat max-w-4xl mx-auto">
          <h1 className="text-[40px] sm:text-[60px] font-bold mb-4 md:mb-16">
            APRENDE <span className="text-orange-500">JAVA</span> BASICO
          </h1>
          <p className="text-lg sm:text-[25px] mb-16 max-w-lg  leading-relaxed">
            Aprende JAVA de una forma básica y sencilla, desde el uso de
            variables hasta ciclos for y while. ¡Desarrolla tu lógica de
            programación!
          </p>
          <button
            onClick={() => handleNavigation("/comienzo")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition transform hover:scale-105"
          >
            COMIENZO
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
