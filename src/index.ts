let mensaje: string = "Hola typescript";

mensaje = "chanchito feliz";

mensaje = "chao mundo";

console.log(mensaje);

// Tipos

console.log(typeof []);

/**
 * Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * Tipos de TS
 * any (trata de no usarlo)
 * uknown
 * never
 * arrays
 * tuplas Enums
 *
 * tipos inferidos
 */

let extincionDinosaurios = 76_000_000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;

// tipo any - puede ser cualquier cosa (no lo uses)
let myVariable;
myVariable = "hola";
myVariable = 23;

function chanchitoFeliz(config: any) {
  return config;
}

// tipo array
let animales = ["tigre", "dragon", "toro"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];
// nums.map(x => x.) el autocompletado sugiere segun el tipo de dato

// Tuplas
let tupla: [number, string[]] = [1, ["tigre", "dragon", "toro"]];
// tupla.push(12)

// tipo enum
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

// PascalCase
enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}

const var1 = Talla.Grande;
console.log(var1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

// Objetos

type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre?: string;
  talla: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: "Juan",
  talla: Talla.Grande,
  direccion: {
    numero: 34,
    calle: "Tropical",
    pais: "Mexico",
  },
};

const arr: Persona[] = [];
