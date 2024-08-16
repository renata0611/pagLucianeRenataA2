function calcularMedia(formulario) {

    let n1 = parseFloat(formulario.n1.value);
    let n2 = parseFloat(formulario.n2.value);
    let n3 = parseFloat(formulario.n3.value);
    let n4 = parseFloat(formulario.n4.value);

    let somaNotas = n1 + n2 + n3 + n4;
    let MediaArit = somaNotas / 4;

    let situacao
    if (MediaArit >= 6){
        situacao = 'Está aprovado!';
    }

    else if(MediaArit < 4){
        situacao = 'Está Reprovado!';
    }

    else if(MediaArit >= 4 && MediaArit < 6){
        situacao = 'Está de IFA!';

    }
        document.getElementById("situacaoMedia").innerHTML =  
        'A média das notas é: ' + MediaArit.toFixed(2) + '.  Situação: ' + situacao;
}


               