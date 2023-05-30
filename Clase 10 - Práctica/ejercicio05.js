var alumnos = [
  {
    nombre: "Juan Gómez",
    nota: 7,
  },
  {
    nombre: "Pedro Rodríguez",
    nota: 4,
  },
  {
    nombre: "Roxana García",
    nota: 8,
  },
  {
    nombre: "Luciano Lopez",
    nota: 5,
  },
  {
    nombre: "Fernanda Giménez",
    nota: 6,
  },
  {
    nombre: "Florencia Martínez",
    nota: 10,
  },
  {
    nombre: "Raúl Sanchez",
    nota: 7,
  },
  {
    nombre: "Sandra Figueroa",
    nota: 8,
  },
];

const aprobados = alumnos.filter((alumno) => alumno.nota >= 7);

console.log(aprobados);
