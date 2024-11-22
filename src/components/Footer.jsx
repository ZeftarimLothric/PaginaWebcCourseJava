import React from "react";
import { Code, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#ffd5bd] py-4">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex justify-center space-x-6 mb-3">
          <BookOpen className="h-5 w-5 text-orange-500" />
          <Code className="h-5 w-5 text-orange-500" />
        </div>
        <p className="text-xs text-gray-600 text-center">
          © 2024 JavaCourse. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
