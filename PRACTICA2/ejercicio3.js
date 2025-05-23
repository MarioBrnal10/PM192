const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

// 1. Buscar persona
const luis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", luis);

// 2. Imprimir nombre y edad de cada persona
personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

// 3. Sumar todas las edades con reduce
const totalEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Suma total de edades:", totalEdades);
