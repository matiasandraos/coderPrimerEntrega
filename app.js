// sumar el precio de los productos
// seleccionar la cantidad de cuotas
// sacar la cuota mensual a pagar con intereses 


function sumarTotalProd (prod1=0 ,prod2=0 ,prod3=0) {
    return prod1 + prod2 + prod3 
}

const calcularCuota = (precioTotalProductos) => {return (precioTotalProductos / 6) }
const calcularCuota2 = (precioTotalProductos2) => {return (precioTotalProductos2 / 12)  }


 


let producto1 = Number(prompt("Ingrese precio del producto 1"))
let producto2 = Number(prompt("Ingrese precio del producto 2"))
let producto3 = Number(prompt("Ingrese precio del producto 3"))



let productosFinales = sumarTotalProd (producto1, producto2, producto3)

alert("El total de su compra es " + productosFinales)






let cuotasMensuales = calcularCuota (productosFinales)
let cuotasMensuales2 = calcularCuota2 (productosFinales)

/* alert("Su cuota mensual de 6 pagos es de " + cuotasMensuales + "\nSu cuota mensual en 12 meses es de " + cuotasMensuales2 ) */ 
/* alert("Su cuota mensual en 12 meses es de " + cuotasMensuales2) */


let entrada = prompt("Coloque el numero de la opcion deseada \n 1 Seis cuotas mensuales \n 2 Doce cuotas mensuales")



const cantidadDeCuotas = (opciones, pagoEn6, pagoEn12) => {

    switch (opciones) {
        case "1":
            return pagoEn6 * 1.15
        
        case "2":
            return pagoEn12 * 1.20
        default:
            return alert("La opcion seleccionada no es valida")
    }

}


let pagoEn6 = cantidadDeCuotas (cuotasMensuales, productosFinales)
alert(pagoEn6)
let pagoEn12 = cantidadDeCuotas (cuotasMensuales2)

a
let precioFinalDeCuota = cantidadDeCuotas (entrada, )

