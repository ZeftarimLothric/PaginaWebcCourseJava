import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const calculateHeight = (code) => {
  const lineCount = code.split("\n").length;
  const baseHeight = Math.max(lineCount * 24, 100);
  return `${baseHeight}px`;
};

export default function CodeEditorEjercisios({
  initialCode = "",
  solutionCode = "",
  readOnly = false,
  onComplete = () => {},
  verifyExercise = (output) => true,
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const executeCode = async () => {
    const pistonRequest = {
      language: "java",
      version: "15.0.2",
      files: [
        {
          name: "Main.java",
          content: code,
        },
      ],
    };

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pistonRequest),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.run && data.run.output) {
        setOutput(data.run.output);
        const exerciseCompleted = verifyExercise(data.run.output);
        setIsCompleted(exerciseCompleted);
        if (exerciseCompleted) {
          onComplete();
        }
      } else if (data.message) {
        setOutput(`Error: ${data.message}`);
      } else {
        setOutput("Error desconocido al ejecutar el código.");
      }
    } catch (error) {
      console.error("Error ejecutando el código:", error);
      setOutput(`Error al intentar ejecutar el código: ${error.message}`);
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg overflow-hidden border border-gray-700">
        <MonacoEditor
          language="java"
          value={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
          options={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 14,
            lineHeight: 24,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            folding: true,
            lineNumbers: "on",
            renderLineHighlight: "all",
            readOnly: readOnly,
            wordWrap: "on",
            autoIndent: "full",
            formatOnPaste: true,
            formatOnType: true,
            suggestOnTriggerCharacters: true,
            tabSize: 2,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: true,
            smoothScrolling: true,
            automaticLayout: true,
          }}
          height={250}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={executeCode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ejecutar código
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className={`px-4 py-2 rounded ${
            showSolution
              ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
              : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
        >
          {showSolution ? "Ocultar solución" : "Mostrar solución"}
        </button>
      </div>

      {output && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-md whitespace-pre-wrap">
            {output}
          </pre>
          {isCompleted && (
            <p className="text-green-500 font-semibold mt-2">
              ¡Ejercicio completado correctamente!
            </p>
          )}
        </div>
      )}

      {showSolution && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Solución:</h3>
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <MonacoEditor
              language="java"
              value={solutionCode}
              theme="vs-dark"
              options={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 14,
                lineHeight: 24,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                folding: true,
                lineNumbers: "on",
                renderLineHighlight: "all",
                readOnly: true,
                wordWrap: "on",
                autoIndent: "full",
                formatOnPaste: true,
                formatOnType: true,
                suggestOnTriggerCharacters: true,
                tabSize: 2,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: true,
                smoothScrolling: true,
                automaticLayout: true,
              }}
              height={calculateHeight(solutionCode)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
