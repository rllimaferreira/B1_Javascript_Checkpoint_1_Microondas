/*Checkpoint 1 - Programação Imperativa (DH)
Houser: Rodrigo Ferreira

Seja bem-vindo(a) ao Micro-ondas Super Veloz, uma tecnologia desenvolvida pelo novo time de desenvolvedores em formação na Digital House Brasil.

Para ele funcionar, você apenas precisa escolher um desses pratos abaixo e o tempo desejado:

                    pipoca, 10 
                    macarrao, 8
                    carne, 15
                    feijao, 12
                    brigadeiro, 8

ATENÇÃO: 
O número ao lado do nome da comida que você viu acima, é o tempo padrão em segundos. Você poderá alterá-lo, aumentando ou diminuindo, de acordo com a sua vontade.

Fique tranquilo(a), porque ele já está na escala de segundos.

Logo após a função abaixo, também em forma de comentário no próprio código, você verá mais instruções de como fazer esta super máquina preparar o seu prato no tempo desejado.*/

function microondas(prato, segundos){
    //Prato 1 - pipoca - 10 segundos (padrão).
    if(prato == 'pipoca' && segundos > 2 * 10 && segundos < 3 * 10){
      console.log('Triiim... O seu status é: a comida queimou, prepare tudo novamente.')
    }else if (prato == 'pipoca' && segundos < 10){
      console.log('Triiim... O seu status é: tempo insuficiente, tente novamente!')
    }else if (prato == 'pipoca' && segundos >= 3 * 10){
      console.log('Triiim... O seu status é: o micro-ondas vai explodir... KA-BUM!')
    }else if (prato == 'pipoca' && segundos == 10){
      console.log('Triiim... O seu status é: prato pronto, bom apetite!')
    }
    //Prato 2 - macarrao – 8 segundos (padrão).
    else if(prato == 'macarrao' && segundos > 2 * 8 && segundos < 3 * 8){
      console.log('Triiim... O seu status é: a comida queimou, prepare tudo novamente.')
    }else if (prato == 'macarrao' && segundos < 8){
      console.log('Triiim... O seu status é: tempo insuficiente, tente novamente!')
    }else if (prato == 'macarrao' && segundos > 3 * 8){
      console.log('Triiim... O seu status é: o micro-ondas vai explodir... KA-BUM!')
    }else if (prato == 'macarrao' && segundos == 8){
      console.log('Triiim... O seu status é: prato pronto, bom apetite!')
    }
    //Prato 3 - carne – 15 segundos (padrão).
    else if(prato == 'carne' && segundos > 2 * 15 && segundos < 3 * 15){
      console.log('Triiim... O seu status é: a comida queimou, prepare tudo novamente.')
    }else if(prato == 'carne' && segundos < 15){
      console.log('Triiim... O seu status é: tempo insuficiente, tente novamente!')
    }else if(prato == 'carne' && segundos > 3 * 15){
      console.log('Triiim... O seu status é: o micro-ondas vai explodir... KA-BUM!')
    }else if(prato == 'carne' && segundos == 15){
      console.log('Triiim... O seu status é: prato pronto, bom apetite!')
    }
    //Prato 4 - feijao – 12 segundos (padrão).
    else if(prato == 'feijao' && segundos > 2 * 12 && segundos < 3 * 12){
      console.log('Triiim... O seu status é: a comida queimou, prepare tudo novamente.')
    }else if (prato == 'feijao' && segundos < 12){
      console.log('Triiim... O seu status é: tempo insuficiente, tente novamente!')
    }else if (prato == 'feijao' && segundos > 3 * 12){
      console.log('Triiim... O seu status é: o micro-ondas vai explodir... KA-BUM!')
    }else if(prato == 'feijao' && segundos == 12){
      console.log('Triiim... O seu status é: prato pronto, bom apetite!')
    }
    //Prato 5 - brigadeiro – 8 segundos (padrão).
    else if(prato == 'brigadeiro' && segundos > 2 * 8 && segundos < 3 * 8){
      console.log('Triiim... O seu status é: a comida queimou, prepare tudo novamente.')
    }else if(prato == 'brigadeiro' && segundos < 8){
      console.log('Triiim... O seu status é: tempo insuficiente, tente novamente!')
    }else if(prato == 'brigadeiro' && segundos > 3 * 8){
      console.log('Triiim... O seu status é: o micro-ondas vai explodir... KA-BUM!')
    }else if(prato == 'brigadeiro' && segundos == 8){
      console.log('Triiim... O seu status é: prato pronto, bom apetite!')
    }
    //Opções não listadas no menu.
    else {
      console.log('Triiim... O seu status é: prato inexistente, tente um válido.')
    }
  }

/*Dentro dos parênteses, substitua apenas o nome da comida abaixo e o tempo pelos que você deseja.

Por exemplo:
microondas(prato, segundos)

por microondas(`pipoca, 10`).*/

microondas('pipoca', 10);
microondas('madioca', 10);
microondas('brigadeiro', 25);