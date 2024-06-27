export class administrador {
    nombre:string
    id: string
    telefono: number
    direccion: string
    correo_electronico: string

    constructor(
    nombre:string,
    id: string,
    telefono: number,
    direccion: string,
    correo_electronico: string,
    ){
        this.nombre=nombre
        this.id=id
        this.telefono=telefono
        this.direccion=direccion
        this.correo_electronico=correo_electronico
    }
}