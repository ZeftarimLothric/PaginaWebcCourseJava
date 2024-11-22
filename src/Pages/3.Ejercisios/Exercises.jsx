import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ContentSection } from "../../components/ContentSection";
import { Footer } from "../../components/Footer";
import CodeEditorEjercisios from "../../components/CodeEditorEjercisios";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../supabase/supabase.config";

export default function Exercises() {
  const [currentPage, setCurrentPage] = useState(0);
  const mainContentRef = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  const updateExerciseStatus = async (exerciseId, completed) => {
    if (!user) return;

    try {
      const { data, error } = await supabase.rpc("update_user_exercise", {
        p_user_id: user.id,
        p_exercise_id: exerciseId,
        p_completed: completed,
      });

      if (error) throw error;
      console.log("Exercise status updated successfully");
    } catch (error) {
      console.error("Error updating exercise status:", error.message);
    }
  };

  const verifyPiramideExercise = (output) => {
    const expectedOutput = `    *
   ***
  *****
 *******
*********`;
    return output.trim() === expectedOutput.trim();
  };
  const verifyHolaMundo = (output) => {
    const expectedOutput = `Hola mundo!`;
    return output.trim() === expectedOutput.trim();
  };

  const sections = [
    [
      {
        title: "Ejercicio: Generar una pirámide con asteriscos",
        content: (
          <div>
            <div className="docText">
              <p className="mb-4">
                Escribe un programa en Java que imprima una pirámide de
                asteriscos. La pirámide debe tener un número específico de
                filas, que podrás configurar manualmente con una variable. Cada
                fila de la pirámide debe contener un número impar de asteriscos,
                centrados horizontalmente. Por ejemplo, si el usuario ingresa 5,
                la salida del programa debería ser la siguiente:
              </p>
              <pre className="bg-gray-100 text-gray-800 p-4 rounded-md mb-4">
                {`    *
   ***
  *****
 *******
*********`}
              </pre>
            </div>
            <div className="mt-4">
              <CodeEditorEjercisios
                initialCode={`public class Piramide {
    public static void main(String[] args) {
        // Implementa tu código aquí
    }
}`}
                readOnly={false}
                solutionCode={`public class Piramide {
    public static void main(String[] args) {
        int altura = 5; // Altura de la pirámide

        for (int i = 1; i <= altura; i++) {
            // Imprimir espacios
            for (int j = 1; j <= altura - i; j++) {
                System.out.print(" ");
            }
            // Imprimir asteriscos
            for (int k = 1; k <= (2 * i) - 1; k++) {
                System.out.print("*");
            }
            // Salto de línea
            System.out.println();
        }
    }
}`}
                onComplete={() =>
                  updateExerciseStatus("piramide_asteriscos", true)
                }
                verifyExercise={verifyPiramideExercise}
              />
            </div>
          </div>
        ),
      },
    ],
    [
      {
        title: "Hola mundo!",
        content: (
          <div>
            <div className="docText">
              <p className="mb-4">
                Escribe un programa en Java que imprima una pirámide de
                asteriscos. La pirámide debe tener un número específico de
                filas, que podrás configurar manualmente con una variable. Cada
                fila de la pirámide debe contener un número impar de asteriscos,
                centrados horizontalmente. Por ejemplo, si el usuario ingresa 5,
                la salida del programa debería ser la siguiente:
              </p>
              <pre className="bg-gray-100 text-gray-800 p-4 rounded-md mb-4">
                {"Hola mundo!"}
              </pre>
            </div>
            <div className="mt-4">
              <CodeEditorEjercisios
                initialCode={`public class Piramide {
    public static void main(String[] args) {
        // Implementa tu código aquí
    }
}`}
                readOnly={false}
                solutionCode={`public class Piramide {
    public static void main(String[] args) {
        System.out.println("Hola mundo!");
    }
}`}
                onComplete={() => updateExerciseStatus("hola_mundo", true)}
                verifyExercise={verifyHolaMundo}
              />
            </div>
          </div>
        ),
      },
    ],
    // Agrega más secciones de ejercicios aquí
  ];

  const handleNextPage = () => {
    if (currentPage < sections.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow mx-auto px-4 py-8 min-h-[800px] bg-[url('/img/BackgroundJava.jpg')] bg-no-repeat bg-fixed">
        <div className="space-y-8">
          {sections[currentPage].map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}

          <div className="flex justify-between">
            <button
              onClick={handlePreviousPage}
              className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition transform hover:scale-105 ${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="mr-2" /> Anterior
            </button>

            <button
              onClick={handleNextPage}
              className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition transform hover:scale-105 ${
                currentPage === sections.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentPage === sections.length - 1}
            >
              Siguiente <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
