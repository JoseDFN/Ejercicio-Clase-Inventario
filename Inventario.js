"use strict"

const Inventario = {
    1:{
        Producto:"Lapiz",
        Cantidad:15,
        Valor:150
    },
    2:{
        Producto:"Lapicero",
        Cantidad:10,
        Valor:250
    },
    3:{
        Producto:"Hoja",
        Cantidad:35,
        Valor:100
    },
    4:{
        Producto:"Cinta",
        Cantidad:17,
        Valor:450
    },
    5:{
        Producto:"Pegante",
        Cantidad:8,
        Valor:750
    }
};

    const Vender = (cod,cant) => {
        let cantidad = Number(cant);
        Inventario[cod].Cantidad -= cantidad;
        console.log(`La nueva cantidad del inventario del producto con codigo ${codigo} es: ${Inventario[codigo].Cantidad}`)
    }

    const Comprar = (cod,cant)=> {
        let cantidad = Number(cant);
        Inventario[cod].Cantidad += cantidad;
        console.log(`La nueva cantidad del inventario del producto con codigo ${codigo} es: ${Inventario[codigo].Cantidad}`)
    }

    const TotalizarInv = () => {
        let ValorTotal = 0;
        for (const codigo of Object.values(Inventario)) {
            ValorTotal += ((codigo.Cantidad)*(codigo.Valor))
        }
        // const MiMap = new Map(Object.entries.Inventario);
        // let ValorTotal = 0;

        // MiMap.forEach((codigo)=>{
        //     ValorTotal += ((codigo.Cantidad)*(codigo.Valor))
        // })

        console.log(`El Valor total del inventario es de ${ValorTotal}`)
    }
const codigo = prompt("Ingrese el codigo del producto(1-5): ");
const cantidad = prompt("Ingrese la cantidad de producto: ");
console.log(Vender(codigo,cantidad));
console.log(Comprar(codigo,cantidad));
console.log(TotalizarInv());