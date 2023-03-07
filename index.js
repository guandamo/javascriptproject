let saldo = parseInt(prompt("Ingrese el saldo a invertir en USDT"));

let valorBTC = parseInt(prompt("Ingrese el valor actual de BTC"));
let valorETH = parseInt(prompt("Ingrese el valor actual de ETH"));
let valorLTC = parseInt(prompt("Ingrese el valor actual de LTC"));

for (;;) {
  let opcion = prompt("¿Qué moneda desea comprar? 1) Bitcoin (BTC), 2) Ethereum (ETH), 3) Litecoin (LTC)");
  
  let gasto = parseInt(prompt(`Ingrese la cantidad de saldo que desea gastar en ${opcion === "1" ? "BTC" : opcion === "2" ? "ETH" : "LTC"}`));
  if (isNaN(gasto)) {
    alert("Debe ingresar un número válido");
    continue;
  }

  switch (opcion) {
    case "1":
      saldo = saldoDisp(saldo, gasto, valorBTC, "BTC");
      break;
    case "2":
      saldo = saldoDisp(saldo, gasto, valorETH, "ETH");
      break;
    case "3":
      saldo = saldoDisp(saldo, gasto, valorLTC, "LTC");
      break;
    default:
      alert("Opción inválida. Por favor, elija una opción correcta.");
      continue;
  }
  
  let continuar = prompt("¿Desea comprar otra moneda? (si)/(no)");
  if (continuar !== "no" && continuar !== "No" && continuar !== "NO" && continuar !== "nO") {
    continue;
  } else {
    break;
  }
}

function saldoDisp(saldo, gasto, valorMoneda, moneda) {
  let cantidad = gasto / valorMoneda;
  alert(`Ha comprado ${cantidad} ${moneda}`);
  return saldo - gasto;
}

alert(`Su saldo disponible es de ${saldo} USDT`);


