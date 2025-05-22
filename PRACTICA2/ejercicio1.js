const persona = {
  nombre: "Mario",
  edad: 21,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

// Aplica desestructuración
const { nombre, edad, direccion: { ciudad } } = persona;

// Imprime el mensaje
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
