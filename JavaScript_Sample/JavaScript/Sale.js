const productos = [
  {
    id: 1,
    nombre: "Mezcla original 200g 500 Yenes",
    precio: 500,
  },
  {
    id: 2,
    nombre: "Mezcla original 500g 900 Yenes",
    precio: 900,
  },
  {
    id: 3,
    nombre: "Mezcla especial 200g 700 Yenes",
    precio: 700,
  },
  {
    id: 4,
    nombre: "Mezcla especial 500g 1200 Yenes",
    precio: 1200,
  }
]

const precioElement = document.getElementById("producto");
const numeroElement = document.getElementById("numero");
let compras = [];

function add() {
  const elementoId  = parseInt(precioElement.value);
  const producto = productos.find(item => item.id == elementoId);
  const numero = parseInt(numeroElement.value);

  let compra = {
    producto: producto,
    numero: parseInt(numero),
  };

  const newCompra = compras.findIndex((item) => item.producto.id === compra.producto.id) // --1
  if(compras.length < 1 || newCompra === -1) {
    compras.push(compra)
  } else {
    compras[newCompra].numero += compra.numero
  }

  // let newCompra = true;

  // compras.forEach((item) => {
  //   if(item.price === compra.precio) {
  //     newCompra = false;
  //   }
  // })

  // if(compras.length < 1 || newCompra) {
  //   compras.push(compra);
  // } else {
  //   for(let index = 0; index < compras.length; index++) {
  //     if(compras[index].precio === compra.precio) {
  //       compras[index].numero += compra.numero;
  //     }
  //   }
  // }

// for(let index=0; index<=compras.length; index++){
//   if(compras.length < 1 || compras[index].precio !== compra.precio){
//     compras.push(compra);
//   } else {
//     compras[index].numero += compra.numero;
//   }
// }

  window.alert(`${display()}\nSubtotal ${subtotal()} Yenes`);
  precioElement.value = "";
  numeroElement.value = "";
}


// function display() {
//   let string = "";
//   for (let index = 0; index < compras.length; index++) {
//     string += `${compras[index].precio}Yenes${compras[index].numero}Cantidad\n`;
//   }
//   return string;
// }

function display() {
  return compras.map(compra => {
    return `Producto: ${compra.producto.nombre}, Precio: ${compra.producto.precio} Yenes, Cantidad: ${compra.numero}`;
    }).join("\n");
};

function subtotal() {
  return compras.reduce((prev, compra) => {
    return prev + compra.producto.precio * compra.numero
  }, 0);
}


// function subtotal() {
//   let sum = 0;
//   for (let index = 0; index < compras.length; index++) {
//     sum += compras[index].precio * compras[index].numero;
//   }
//   return sum;
// }


function calc() {
  const sum = subtotal();
  const tarifa = calcTarifaFromCompra(sum);
  window.alert(`${display()}\nEl subtotal es de ${sum}, La tarifa de envio es de ${tarifa} yenes. El monto total es ${sum + tarifa} yenes`);
  compras = [];
  precioElement.value= "";
  numeroElement.value = "";
}

function calcTarifaFromCompra(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500; 
  } else {
    return 250;
  }
}

