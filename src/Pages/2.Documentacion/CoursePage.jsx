import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ContentSection } from "../../components/ContentSection";
import { Footer } from "../../components/Footer";
import CodeEditor from "../../components/CodeEditor";
import Navbar from "../../components/Navbar";

export default function CoursePage({ onNavigate }) {
  const [currentPage, setCurrentPage] = useState(0);
  const mainContentRef = useRef(null);

  useEffect(() => {
    mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  const sections = [
    [
      {
        title: "1. ¿Qué es Java?",
        content: (
          <p className="docText">
            Java es un lenguaje multiplataforma cuyo principio clave es “escribe
            una vez, ejecuta en cualquier lugar” (WORA). Esto significa que una
            vez que el código se compila en bytecode, puede ejecutarse en
            cualquier sistema que tenga la Máquina Virtual de Java (JVM). Es
            altamente seguro, con una recolección de basura automática y una
            gestión de memoria eficiente.
          </p>
        ),
      },
      {
        title: "2. Variables y tipo de datos",
        content: (
          <div>
            <div className="docText">
              <p>
                En Java, las variables son contenedores que almacenan valores.
                Cada variable debe declararse con un tipo de dato que define el
                tipo de información que puede almacenar. Los tipos de datos en
                Java se dividen en dos categorías:
              </p>
              <p className="docText indent-8">
                <span className="font-bold">•Tipos primitivos:</span> Estos
                incluyen números enteros, números de punto flotante, booleanos
                (falso o verdadero) y caracteres. Es importante saber tambien la
                diferencias entre float y double, float puede mantener hasta 7
                cifras decimales de manera precisa, mientras que double puede
                mantener hasta 15.
              </p>
            </div>
            <div className="">
              <CodeEditor
                initialCode={`public class Main {
    public static void main(String[] args) {
        int VariableEntera=1;
        float VariableFloat=1;
        double VariableDouble=1.1;
        Boolean VariableBool=true;
        String VariableTexto="Hola Mundo";
    }
}`}
                readOnly={true}
              />
            </div>
          </div>
        ),
      },
      {
        title: "3. Declaracion de variables",
        content: (
          <div>
            <div className="docText">
              <p>
                Antes de usar una variable, es necesario declararla, lo que
                implica especificar su tipo y darle un nombre. Las variables
                pueden inicializarse (darles un valor) en el momento de la
                declaración o más adelante en el código. Es una buena práctica
                dar nombres significativos a las variables para hacer el código
                más legible y comprensible (La forma de declaras variables se
                encuentra en la imagen " 1 " que se muestra en el apartado
                anterior).
              </p>
            </div>
          </div>
        ),
      },
    ],
    //
    //
    //
    // SEGUNDA PAGINA
    [
      {
        title: "4. Operadores en Java",
        content: (
          <div>
            <div className="docText">
              <p>
                Java utiliza una variedad de operadores para realizar
                operaciones en variables y valores. Estos incluyen operadores
                aritméticos (suma, resta, multiplicación, división), operadores
                de comparación (igualdad, mayor que, menor que) y operadores
                lógicos (AND, OR, NOT). Los operadores se utilizan para
                manipular datos y tomar decisiones dentro del código.
              </p>
              <h3 className="docTitle text-[25px]">
                4.1 Operadores Aritmeticos
              </h3>
              <div className="">
                <CodeEditor
                  initialCode={`public class Main {
    public static void main(String[] args) {
        //Operadores aritmeticos
        variable=1+1; //suma, el resultado seria 2
        variable=2-1; //resta, el resultado seria 1
        variable=3*3; //multiplicacion, el resultado seria 9
        variable=6/2; //division, el resultado seria 3
    }
}`}
                  readOnly={true}
                />
              </div>
              <h3 className="docTitle text-[25px]">
                4.2 Operadores de Comparacion
              </h3>
              <div className="">
                <CodeEditor
                  initialCode={`public class Main {
    public static void main(String[] args) {
        //Con los operadores de comparacion seria
        int a = 10;
        int b = 5;
        System.out.println(a > b);  // en este caso nos devolveria un true (10 es mayor que 5)
        int a = 10;
        int b = 5;
        System.out.println(a < b);  // en este caso nos devolveria un false (10 no es mayor que 5)
        int a = 10;
        int b = 5;
        System.out.println(a == b);  // en este caso nos devolveria un false (10 no es igual que 5)
        int a = 10;
        int b = 5;
        System.out.println(a >= b);  // en este caso nos devolveria un true (10 es mayor que 5, y si fuera igual que 5 tambien nos devolveria un true)
        int a = 10;
        int b = 5;
        System.out.println(a <= b);  // en este caso nos devolveria un false (10 es mayor que 5, solo nos daria true si a fuera menor o igual a b)
        int a = 10;
        int b = 5;
        System.out.println(a != b);  // en este caso nos devolveria un true (10 es diferente que 5 y por eso nos da true)
    }
}`}
                  readOnly={true}
                />
              </div>
              <h3 className="docTitle text-[25px]">4.3 Operadores Logicos</h3>
              <div className="">
                <CodeEditor
                  initialCode={`public class Main {
    public static void main(String[] args) {
        //Operadores Logicos
        int a = 5;
        int b = 10;

        //Operador AND (&&)
        System.out.println(a > 2 && b < 15);  // true (5 es mayor que 2 y 10 es menor que 15)
        System.out.println(a > 10 && b < 15); // false (5 no es mayor que 10, aunque 10 es menor que 15)

        //Operador OR (||)
        System.out.println(a > 2 || b < 5);   // true (5 es mayor que 2, aunque 10 no es menor que 5)
        System.out.println(a > 10 || b < 5);  // false (ninguna de las condiciones se cumple)


        boolean resultado = true;
        //Operador NOT (!)
        System.out.println(!resultado);  // false (la negación de true es false)
    }
}`}
                  readOnly={true}
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "5. Control de flujo",
        content: (
          <div>
            <div className="docText">
              <p>
                Java proporciona varias estructuras para controlar el flujo de
                ejecución del programa. Estas incluyen:
              </p>
              <div className="docText indent-8">
                <span className="font-bold">•Condicionales:</span> Permiten
                ejecutar bloques de código basados en ciertas condiciones. El
                uso de sentencias if, else, y switch es común en Java para
                realizar bifurcaciones en el flujo de un programa.
                <p className="docText indent-16">
                  <span className="font-bold ">1. Sentencia [if]:</span>
                  La sentencia if se usa para ejecutar un bloque de código solo
                  si una condición es verdadera.
                </p>
                <div className="indent-0">
                  <CodeEditor
                    initialCode={`public class Main {
    public static void main(String[] args) {
        //Sentencias if
        int numero = 10;

        if (numero > 5) {
            System.out.println("El número es mayor que 5.");
        }
        /*En este caso la condicion es, si la variable "numero" es mayor
        que el numero 5, nos imprime en consola lo que esta entre comillas.
        En caso de que no se cumpla la condicion, no ocurrira nada.*/
    }
}`}
                    readOnly={true}
                    height="320px"
                  />
                </div>
                <p className="docText indent-16">
                  <span className="font-bold">
                    2. Sentencia [else if] y [else]:
                  </span>
                  Las sentencias else if y else se utilizan para proporcionar
                  más opciones cuando la primera condición if no es verdadera.
                </p>
                <div className="indent-0">
                  <CodeEditor
                    initialCode={`public class Main {
    public static void main(String[] args) {
        //Sentencias else if y else
        int numero = 7;

        if (numero > 10) {
            System.out.println("El número es mayor que 10.");
        } else if (numero == 7) {
            System.out.println("El número es igual a 7.");
        } else {
            System.out.println("El número es menor que 10 y diferente de 7.");
        }
        /*Aqui vemos el primer if, nos dice que si la variable numero es mayor que 10 entonces 
        nos imprime que el numero si es mayor que diez, aqui entra el else, que en caso de que no
        se cumpla la primera condicion hace la siguiente sentencia que es el else if, que seria como un "si no
        se cumple lo primero" compara la variable numero para saber si es igual a 7, en caso de que sea asi imprime
        que el numero es igual a 7, pero si no se pasa a la siguiente condicon que solo pasa si ninguna de las 
        dos condiciones anteriores se cumple e imprime que el numero es menor que 10 y diferente de 7*/
    }
}`}
                    readOnly={true}
                  />
                </div>
                <p className="docText indent-16">
                  <span className="font-bold">3. Sentencia [switch]:</span>
                  La sentencia switch es una alternativa a múltiples if-else
                  cuando se compara el valor de una variable con varias opciones
                  posibles. Es más eficiente cuando se tienen muchos casos.
                </p>
                <div className=" indent-0">
                  <CodeEditor
                    initialCode={`public class Main {
    public static void main(String[] args) {
        //Switch
        int dia = 3;

        switch (dia) {
            case 1:
                System.out.println("Lunes");
                break;
            case 2:
                System.out.println("Martes");
                break;
            case 3:
                System.out.println("Miércoles");
                break;
            case 4:
                System.out.println("Jueves");
                break;
            case 5:
                System.out.println("Viernes");
                break;
            default:
                System.out.println("Fin de semana");
        }
        /*Aqui compara la variable dia que en este caso es igual a 3, por lo tanto nos imprimiria
        el dia Miercoles, si cambiamos el valor de dia a 5, nos imprimiria Viernes.*/
    }
}`}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "6. Ciclos y bucles",
        content: (
          <div className="docrText indent-8">
            <p className="docText indent-16">
              <span className="font-bold ">1. Bucle [for]:</span>
              El bucle for se usa cuando se conoce de antemano cuántas veces se
              quiere ejecutar un bloque de código. Es comúnmente utilizado para
              iterar a través de un rango de números.
            </p>
            <div className="indent-0">
              <CodeEditor
                initialCode={`public class Main {
    public static void main(String[] args) {
        //Bucle for
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteración: " + i);
        }
        /*En este ejemplo, el bucle comienza en i = 0 y se ejecuta mientras i < 5. 
        Después de cada iteración,i se incrementa en 1. Se imprimen los números del 0 al 4.*/

        //Bucle while
        int contador = 0;

        while (contador < 5) {
            System.out.println("Contador: " + contador);
            contador++; 
        }
        /*Aquí, el bucle while continuará ejecutándose mientras contador sea menor que 5. 
        Se imprime el valor de contador en cada iteración y luego se incrementa en 1. */
    }
}`}
                readOnly={true}
              />
            </div>
            <p className="docText indent-16">
              <span className="font-bold ">2. Bucle [while]:</span>
              El bucle while se ejecuta mientras una condición especificada sea
              verdadera. Es útil cuando no se sabe de antemano cuántas veces se
              ejecutará el bucle.
            </p>
            <div className="indent-0">
              <CodeEditor
                initialCode={`public class Main {
    public static void main(String[] args) {
        /Bucle while
        int contador = 0;

        while (contador < 5) {
            System.out.println("Contador: " + contador);
            contador++; 
        }
        /*Aquí, el bucle while continuará ejecutándose mientras contador sea menor que 5. 
        Se imprime el valor de contador en cada iteración y luego se incrementa en 1. */
    }
}`}
                readOnly={true}
              />
            </div>
            <p className="docText indent-16">
              <span className="font-bold ">3. Bucle [do-while]:</span>
              El bucle do-while es similar al while, pero garantiza que el
              bloque de código se ejecutará al menos una vez, ya que la
              condición se evalúa después de ejecutar el código.
            </p>
            <div className="indent-0">
              <CodeEditor
                initialCode={`public class Main {
    public static void main(String[] args) {
        //Bucle do-while
        int numero = 0;

        do {
            System.out.println("Número: " + numero);
            numero++;
        } while (numero < 5);
        /*En este ejemplo, el código dentro del bloque do se ejecutará una vez, incluso si la condición 
        numero < 5 es falsa desde el principio. Luego se verifica la condición, y si es verdadera, el bucle continúa. */
    }
}`}
                readOnly={true}
              />
            </div>
          </div>
        ),
      },
    ],
  ];

  const handleNextPage = () => {
    if (currentPage < sections.length - 1) {
      setCurrentPage(currentPage + 1);
      mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={mainContentRef}
      className="min-h-screen flex flex-col bg-gray-900 text-white"
    >
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
