import { useState } from "react";
import { LandingPage } from "./1.HomePage/LandingPage";
import { CoursePage } from "./2.Documentacion/CoursePage";
import { Excercises } from "./3.Ejercisios/Exercises";

function Index() {
  const [currentPage, setCurrentPage] = useState("inicio");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "inicio" && (
        <LandingPage onNavigate={handleNavigation} />
      )}
      {currentPage === "comienzo" && (
        <CoursePage onNavigate={handleNavigation} />
      )}
      {currentPage === "ejercicios" && (
        <Excercises onNavigate={handleNavigation} />
      )}
    </>
  );
}

export default Index;
