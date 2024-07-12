
const precioElement = document.getElementById("producto");
const numeroElement = document.getElementById("numero");
let compras = [];

function add() {
  const precio = parseInt(precioElement.value);
  const numero = parseInt(numeroElement.value);

  let compra = {
    precio: parseInt(precio),
    numero: parseInt(numero),
  };

  const newCompra = compras.findIndex((item) => item.precio === compra.precio) // --1
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

  window.alert(`${display()}\nSubtotal${subtotal()}Yenes`);
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
    return `${compra.precio}Yenes${compra.numero}Cantidad`
    }).join("\n");
};

function subtotal() {
  return compras.reduce((prev, compra) => {
    return prev + compra.precio * compra.numero
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
  window.alert(`Elsubtotalesde${sum}Latarifadeenvioesde${tarifa}yenes.Elmontototales${sum + tarifa}yenes`);
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

