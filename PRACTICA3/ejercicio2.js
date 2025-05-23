function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

// Pruebas
verificarUsuario("admin")
  .then(res => console.log(res))     // Acceso concedido
  .catch(err => console.error(err));

verificarUsuario("Mario")
  .then(res => console.log(res))
  .catch(err => console.error(err)); // Acceso denegado
