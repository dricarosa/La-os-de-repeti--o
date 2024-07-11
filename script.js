var maior = 0;
var menor = 0;
for (var i = 1; i <= 20; i++) {
    var numero = parseInt(prompt("Digite um numero "));
    if (numero > maior) {
        maior = numero;
    }
    else if (numero < menor) {
        menor = numero;
    }
}

document.write("o maior é:" + maior + ". E o menor é:" + menor)