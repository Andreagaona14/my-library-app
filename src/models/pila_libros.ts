import {Libros}  from './libros';

export class pila_libros{
     libros:Libros[];

     constructor(){
          this.libros = [];
     }

     //Metodo para mostrar todos los libros en la biblioteca//
     listaLibro(): void {
          if (this.libros.length ===0){
               console.log('La libreria esta vacia.');
          } else {
               console.log ('Libros en la biblioteca:');
               this.libros.forEach (libro => {
                    console.log(`titulo: ${libro.titulo}, autor: ${libro.autor}, genero: ${libro.genero}, idioma: ${libro.idioma}, precio: ${libro.precio}, formato: ${libro.formato}, isbn: ${libro.isbn}, descripcion: ${libro.descripcion}, estado: ${libro.estado}, ubicacion: ${libro.ubicacion}, fecha_publicacion: ${libro.fecha_publicacion}, editorial: ${libro.editorial}, paginas: ${libro.paginas}, dimensiones: ${libro.dimensiones}, peso: ${libro.peso}, disponible: ${libro.disponible}`)
          })
     }
}

          
     // Metodo para agregar un libro a la biblioteca//
     nuevoLibro(libro: Libros): void {
          this.libros.push(libro);
          console.log (`Libro ${libro.titulo} agregado a la biblioetca`);
     }


     //Metodo para eliminar un libro de la biblioteca//
     eliminarLibro(titulo: string): void{
          const index = this.libros.findIndex(libro =>libro.titulo === titulo);
          if (index !== -1) {
               this.libros.splice(index,1);
               console.log(`Libro ${titulo} Eliminado de la biblioteca.`)
          } else {
               console.log(`Libro ${titulo} No se encontro en la biblioteca.`)
          }
     }
     
          interacciones(): void {
               const titulo = this.libros.map ((Libros) => {
                    return{
                         titulo: Libros.titulo,
                         genero: Libros.genero,
                    }})
                    console.log(titulo)
               const idioma = this.libros.map((Libros)=>{
                    return{
                             titulo: Libros.titulo,
                             idioma: Libros.idioma,
                    }})
                     console.log(idioma)
                     
               const formato = this.libros.map((Libros)=>{
                    return{
                             titulo: Libros.titulo,
                             formato: Libros.formato,
                    }})
                     console.log(formato)
                     
               const isbn = this.libros.map((Libros)=>{
                    return{
                             titulo: Libros.titulo,
                             isbn: Libros.isbn,
                    }})
                     console.log(isbn)
                     
               const descripcion = this.libros.map((Libros)=>{
                    return{
                             titulo: Libros.titulo,
                             descripcion: Libros.descripcion,
                             dimensiones: Libros.dimensiones,
                     }})
                     console.log(descripcion)
                     
                const estado = this.libros.map((Libros)=>{
                    return{
                             titulo:Libros.titulo,
                             estado: Libros.estado,
                    }})
                     console.log(estado)
                     
               const ubicacion = this.libros.map((Libros)=>{
                    return{
                             titulo: Libros.titulo,
                             ubicacion: Libros.ubicacion,
                    }})
                     console.log(ubicacion)
                     
                const fecha_publicacion = this.libros.map((Libros)=>{
                    return{
                             titulo: Libros.titulo,
                             fecha_publicacion: Libros.fecha_publicacion,
                    }})
                     console.log(fecha_publicacion)
                     
               const peso = this.libros.map((Libros)=>{
                    return{
                             titulo: Libros.titulo,
                             idioma: Libros.idioma,
                             peso: Libros.peso,
                     }})
                     console.log(peso)
                     
               const paginas= this.libros.map((Libros)=>{
                     return{
                             titulo:Libros.titulo,
                             paginas:Libros.paginas,
                    }})
                    console.log(paginas)
                }

     descuentos(): void {
 const librosConDescuentos = this.libros.map((Libros)=>{
     return{
         ...Libros,
         descuento:20,
     }})
 console.log(librosConDescuentos)  
 

const descuentos =librosConDescuentos.map((Libros)=>{
     return{
         titulo: Libros.titulo,
         autor: Libros.autor,
         editorial: Libros.editorial,
         precio: Libros.precio,
         Descuentos: Libros.descuento
     } })
 console.table(descuentos)
     }

     
     filtrar(): void {
const librosCarosPorTitulosDesc = this.libros.filter((Libros) =>{
     return Libros.precio>11;
 })
 .map((titulo) => {
     return{
         titulo: titulo.titulo,
         autor: titulo.autor,
         precio: titulo.precio
     }})
 
     .sort((a,b)=> b.precio - a.precio);
 console.table(librosCarosPorTitulosDesc);
     }
   
    
     sort(): void{
const librosConMayorPaginas = this.libros.sort((a,b) =>b.paginas-a.paginas)
.map((titulo) =>{
    return{
    titulo: titulo.titulo,
    autor: titulo.autor,
    editorial: titulo.editorial,
    paginas: titulo.paginas
}});   
console.table(librosConMayorPaginas);
 

const librosMayorMenor = this.libros.sort((a,b) =>b.paginas - a.paginas);
console.table(librosMayorMenor);
   }

   
   encadenados(): void{
 const librosCarosPorTitulosDesc = this.libros.filter((Libros) =>{
     return Libros.precio>20;
 })
 .map((titulo) => {
     return{
         titulo: titulo.titulo,
         autor: titulo.autor,
         precio: titulo.precio
     }
 }
 )
 .sort((a,b)=> b.precio - a.precio);
 console.table(librosCarosPorTitulosDesc);
   }

   busquedas(): void {
     const libroTitulo = this.libros.find((Libros) => {
          return Libros.titulo === "El viaje de los Mil Mundos";
      });
      console.log(libroTitulo)

      const libroAutor = this.libros.find((Libros) => {
          return Libros.autor === "Laura Gomez";
      });
      console.log(libroAutor)

      const libroGenero = this.libros.find((Libros) => {
          return Libros.genero === "Fantasia";
      });
      console.log(libroGenero)
     }

}


