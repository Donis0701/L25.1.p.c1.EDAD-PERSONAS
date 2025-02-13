/*3. Conociendo la edad de varias personas, indicar la edad promedio.*/

import cl_Persona from "./cl_Personas.js";
import cl_Edad from "./cl_Edad.js";

let edad = new cl_Edad(15);
let edad2 = new cl_Edad(14);
let edad3 = new cl_Edad(19);
let edad4 = new cl_Edad(20);
let edad5 = new cl_Edad(16);
let edad6 = new cl_Edad(18);

let persona = new cl_Persona;
persona.procesarEdad(edad);
persona.procesarEdad(edad2);
persona.procesarEdad(edad3);
persona.procesarEdad(edad4);
persona.procesarEdad(edad5);
persona.procesarEdad(edad6);

let salida = document.getElementById("salida");
salida.innerHTML+= `La edad promedio es= ${persona.promedioEdad()}`