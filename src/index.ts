import { pila_libros } from "./models/pila_libros";
import {Libros }  from "./models/libros";

const libreria = new pila_libros();
const LibroUno =new Libros ("Bajo la misma estrella", "John Green", "Novela", "Ingles", 14.47, "Tapa dura", 6073114230, "azul", "Nuevo", "Centro", "10 de enero del 2012", "Punto de lectura ", 304, "19*13cm", "300 Gramos", true);
const LibroDos = new Libros ("1984", "George", "Ficcion", "Ingles", 11.95, "Tapa blanda", 97084524935, "Novela clasica que describe un futuro disoptico", "Nuevo", "Londres Reino Unido", "1994-06-08", "Punto de lectura ", 328, "42*69 Pulgadas", "7.2 Onzas", false);
const LibroTres = new Libros ("Principito", "Antoine de Saint", "Fabula", "Frances", 14.99, "Tapa dura", 978001560121, "Un cuento filosofico sobre un viajero espacial que encuentra un pequeño principe en un asteroide", "Usado", "Paris,Francia", "1943-04-06", "Punto de lectura ", 96,  "44*75 Pulgadas",  "72 Onzas", true);
const LibroCuatro = new Libros ("Harry Potter y la piedra filosofal", "J.K. Rowling", "Fantasia", "Español", 25.95, "Ebook", 97884788, "Es el primer libro de la serie de Harry Potter que sigue las aventuras de un joven mago", "Nuevo", "Londre Reino Unido", "1997-06-26", "Punto de lectura ", 256, "Variable", "Variable", false);
const LibroCinco = new Libros ("Don Quijote de la mancha", "Miguel de Cervantes", "Novela", "Español", 30.00, "Tapa blanda", 9784273003, "Una obra clasica que narra las aventuras de un hidalgo enloquecido", "Usado",  "Madrid España", "1605-01-16", "Punto de lectura ", 1040, "6.1*9.2 Pulagadas",  "1.8 Libras", true);
const LibroSeis = new Libros ("Orgullo y prejuicio", "Jane Austen", "Romance", "Ingles", 14.40, "Tapa Blanda", 6073112580, "Una novela que sigue las vicisitudes de la familia Bennet en especial las de la hija mayor", "Usado", "Reino Unido ",  "1813-01-28", "Penguin Classics", 304, "19*13cm", "320 Gramos", false);
const LibroSiete = new Libros ("The Catcher in the Rye", "J.D. Salinger", "Ficcion",  "Ingles",  12.41,  "Tapa blanda", 7336978230, "La hiistoria de Holden Caulfield, un adolescente rebelde que lucha contra la hipocresia y la superficialidad",  "Nuevo", "Nueva York",  "1951-07-16", "Penguin Classics", 224, "55*82cm", "8.8 Onzas", true);
const LibroOcho = new Libros ("Moby- Dick", "Herman Melville", "Aventura clasica", "Ingles", 9.99, "Tapa blanda", 8961142241, "La obsesiva busqueda del capitan Ahab vengaese de la ballena blanca que le arrebato una pierna", "Nuevo", "Centro", "10 de enero del 2012","Penguin Classics ", 304, "19*13cm", "300 Gramos", false);
const LibroNueve =   new Libros ("The Lord of the Rings", "J.R.R Tolkin", "Fantasia", "Ingles", 19.36, "Tapa dura", 970618640, "Una trilogica clasica que sigue la busqueda de un grupo de personajes para destruir un anillo magico ", "Nuevo", "Nantucket EE.UU", "1851-10-18", "Penguin Classics", 624, "5.5*8.5 Pulgadas", "14 Libras", true);
const LibroDiez = new Libros ("El Alquimista", "Paulo Coelho", "Ficcion", "Español", 3.99, "Ebook", 9700623160,  "Una novela inspiradora que sigue el viaje de un joven pastor en busca de su destino y de la verdadera felicidad",  "Nuevo", "Rio de Janeiro, Brazil", "1988-09-01",  "Penguin Classics", 208, "N/A", "Variable", false);
function interacciones() : void { libreria.interacciones};
function descuentos() : void {libreria.descuentos};
function filtrar(): void {libreria.filtrar};
function encadenados(): void {libreria.encadenados};
function busquedas(): void {libreria.busquedas};
const continuar: string ="si"; 
while (continuar.toLocaleLowerCase() === "si") {
     const menu:string =  "Menu\n\n";
     "1-Ver libros\n";
     "2-Agregar un libro\n";
     "3-Eliminar un libro\n";
     "4-Listar libros\n";
     "5-Resumen de los segmentos\n";
     "6-busqueda libros"
     "Ingrese el  numero para ejecutar la funcion"

     const decision:number =parseInt(prompt(menu) || "0");

     switch (decision) {
          case 1:
          libreria.listaLibro();
          break;
          case 2:
               libreria.nuevoLibro(LibroUno);
               libreria.nuevoLibro(LibroDos);
               libreria.nuevoLibro(LibroTres);
               libreria.nuevoLibro(LibroCuatro);
               libreria.nuevoLibro(LibroCinco);
               libreria.nuevoLibro(LibroSeis);
               libreria.nuevoLibro(LibroSiete);
               libreria.nuevoLibro(LibroOcho);
               libreria.nuevoLibro(LibroNueve);
               libreria.nuevoLibro(LibroDiez);
               break;
         case 3: 
        const titulo = prompt ("Ingrese el titulo del libro que desea borrar")  ||"";
         libreria.eliminarLibro(titulo)
        break;
        case 4: 
        interacciones()
     }
}