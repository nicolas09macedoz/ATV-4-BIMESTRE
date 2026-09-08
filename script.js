let codigoProduto = Number(prompt("Código do produto: "))
let quantidade = Number(prompt("Quantidade: "))

let preco

if (codigoProduto == 1) {
    preco = 5.00
}

else if (codigoProduto == 2) {
    preco = 3.50
}

else if (codigoProduto == 3) {
    preco = 4.80
}

else if (codigoProduto == 4) {
    preco = 8.90
}

else if (codigoProduto == 5) {
    preco = 7.32
}

let valor = preco * quantidade

console.log("Valor a pagar: R$ " + valor.toFixed(2))