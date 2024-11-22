import { createClient } from "@supabase/supabase-js";

// Asegúrate de que estas variables de entorno estén definidas y sean accesibles
const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

// Crea un único cliente de Supabase para interactuar con tu base de datos
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
