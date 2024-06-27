export class venta {
    id_cliente: string
    libro: string
    valor_libro: number
    cantidad_libro: number

    constructor(
    id_cliente: string,
    libro: string,
    valor_libro: number,
    cantidad_libro: number,
    ){
        this.id_cliente=id_cliente
        this.libro=libro
        this.valor_libro=valor_libro
        this.cantidad_libro=cantidad_libro
    }
}