export class cliente {
    nombre:string
    id: string
    direccion: string
    telefono: number
    correo_electronico: string

    constructor(
    nombre:string,
    id: string,
    direccion: string,
    telefono: number,
    correo_electronico: string,
    ){
        this.nombre=nombre
        this.id=id
        this.direccion=direccion
        this.telefono=telefono
        this.correo_electronico=correo_electronico
    }
}