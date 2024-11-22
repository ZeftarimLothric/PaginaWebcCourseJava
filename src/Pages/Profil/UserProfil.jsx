import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Profil from "../../components/Profil";

// Lista de todos los ejercicios disponibles
const ALL_EXERCISES = [
  { id: "piramide_asteriscos", name: "Pirámide de Asteriscos" },
  { id: "hola_mundo", name: "Impresion de un Hola Mundo!" },
  { id: "palindromo", name: "Verificador de Palíndromos" },
  // Añade aquí más ejercicios según los vayas creando
];

export default function UserProfil() {
  const { user } = useAuth();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchExercises() {
      if (user) {
        try {
          const { data, error } = await supabase
            .from("user_exercises")
            .select("*")
            .eq("user_id", user.id);

          if (error) throw error;

          // Combinar los ejercicios completados con la lista completa
          const completedExercises = new Set(data.map((e) => e.exercise_id));
          const allExercisesStatus = ALL_EXERCISES.map((exercise) => ({
            ...exercise,
            completed: completedExercises.has(exercise.id),
          }));

          setExercises(allExercisesStatus);
        } catch (error) {
          console.error("Error fetching exercises:", error.message);
        }
      }
    }

    fetchExercises();
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col bg-[url('/img/BackgroundJava.jpg')] bg-no-repeat bg-fixed font-montserrat">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl bg-[#fdc5a4] backdrop-blur-md shadow-xl rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Perfil de Usuario
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <Profil
                profilPicture={user?.user_metadata.avatar_url}
                name={user?.user_metadata.full_name}
              />
              <div className="mt-4 md:mt-0 text-center md:text-right">
                <h2 className="text-2xl font-semibold text-gray-700">
                  Progreso Total
                </h2>
                <p className="text-4xl font-bold text-orange-500">
                  {exercises.filter((e) => e.completed).length} /{" "}
                  {exercises.length}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Estado de Ejercicios
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="bg-[#ffd5bd] shadow-md rounded-lg overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700">
                          {exercise.name}
                        </h3>
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-2 ${
                            exercise.completed
                              ? "bg-green-300 text-green-800"
                              : "bg-red-300 text-red-800"
                          }`}
                        >
                          {exercise.completed ? "TERMINADO" : "NO TERMINADO"}
                        </span>
                      </div>
                      {exercise.completed && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
