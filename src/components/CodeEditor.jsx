import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";

loader.init().then((monaco) => {
  monaco.editor.defineTheme("modernTheme", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6A9955", fontStyle: "italic" },
      { token: "keyword", foreground: "569CD6" },
      { token: "string", foreground: "CE9178" },
    ],
    colors: {
      "editor.background": "#1E1E1E",
      "editor.foreground": "#D4D4D4",
      "editorLineNumber.foreground": "#858585",
      "editor.lineHighlightBackground": "#2F3139",
    },
  });
});

const calculateHeight = (code) => {
  const lineCount = code.split("\n").length;
  const baseHeight = Math.max(lineCount * 24, 100);
  return `${baseHeight}px`;
};

export default function CodeEditor({ initialCode = "", readOnly = true }) {
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  return (
    <div className="rounded-lg overflow-hidden mx-20">
      <MonacoEditor
        language="java"
        value={code}
        onChange={(value) => setCode(value)}
        theme="modernTheme"
        style={{ border: "none" }}
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
        height={calculateHeight(initialCode)}
      />
    </div>
  );
}
