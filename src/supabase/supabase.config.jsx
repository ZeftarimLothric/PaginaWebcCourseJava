import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Opcional: Agrega manejo de errores para la inicialización
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Faltan variables de entorno de Supabase");
}

// Prueba la conexión
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error("Error al conectar con Supabase:", error.message);
  } else {
    console.log("Conexión exitosa con Supabase");
  }
});
