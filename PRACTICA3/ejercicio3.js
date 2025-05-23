function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000);
  });
}

async function obtenerDatos() {
  try {
    const resultado = await simularPeticionAPI();
    console.log(resultado); // Imprime: Datos recibidos correctamente
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// Llamada a la función async
obtenerDatos();
