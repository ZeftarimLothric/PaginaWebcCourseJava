import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import LandingPage from "../Pages/1.HomePage/LandingPage";
import CoursePage from "../Pages/2.Documentacion/CoursePage";
import Excercises from "../Pages/3.Ejercisios/Exercises";
import UserProfil from "../Pages/Profil/UserProfil";

export function MyRoutes() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/comienzo" element={<CoursePage />} />
      <Route path="/ejercicios" element={<Excercises />} />
      <Route path="/profil" element={<UserProfil />} />
    </Routes>
  );
}
