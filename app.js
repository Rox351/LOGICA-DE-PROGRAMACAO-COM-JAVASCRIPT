alert('Boas Vindas ao jogo do número secreto !');
let numeroMaximo =  1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('O númerro secreto é menor que ' + chute);
        } else {
            alert('O númerro secreto é maior que ' + chute);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

//palavra tentativas > 1 é maior que 1 "?" caso seja 'tentativas' : se não 'tentativa'.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto ! ${numeroSecreto} com ${tentativas} tentativas` );
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ! ${numeroSecreto} com ${tentativas} tentativa. ` );
//}