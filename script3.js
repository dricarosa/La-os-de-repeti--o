function MediaTurma() {
    var mediasPonderadas = [];
    for (var aluno = 1; aluno <= 20; aluno++) {
        var nota1 = parseFloat(prompt(`Digite a primeira nota do aluno ${aluno}: `));
        var nota2 = parseFloat(prompt(`Digite a segunda nota do aluno ${aluno}: `));
        var nota3 = parseFloat(prompt(`Digite a terceira nota do aluno ${aluno}: `));
        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            var mp = (nota1 * 2 + nota2 * 4 + nota3 * 3) / 9;
            mediasPonderadas.push(mp);
            document.write(`Aluno ${aluno}: Média ponderada = ${mp.toFixed(2)} <br/>`);
        } else {
            document.write(`Notas inválidas para o aluno $ {aluno}.`);
        }
    }
    if (mediasPonderadas.length > 0) {
        var somaMedias = mediasPonderadas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        var mediaGeral = somaMedias / mediasPonderadas.length;
        document.write(`\n Média Geral da turma: ${mediaGeral.toFixed(2)}`);
    } else {
        document.write(`Não deu para calcular a média da turma :c `);
    }
}
