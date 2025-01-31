/* ÁREA DE VARIÁVEIS */
let amigos = [];
let nome = '';

/* ÁREA DE FUNÇÕES*/

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    /*responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});*/
}

function adicionarAmigo() {
    const nomeDoAmigo = document.getElementById('amigo');                   ///captura o conteído do campo do nome
    const novoAmigo = nomeDoAmigo.value;

    if (novoAmigo == '') {                                                  //verifica se o campo está vazio
        alert('ERRO!!! Você precisa digitar um nome !!! (o campo não pode estar vazio.)')
    } else {
        if (amigos.includes(novoAmigo)){                                    //verifica se o nome já consta no array
            alert('Este nome já consta na lista');                          //avisa usuário (pop-up em tela) que o nome já consta no array
            return                                                          //sai da função
        }

        amigos.push(novoAmigo);                                             //adiciona o novo nome no array
        console.log(amigos);                                                //mostra o conteúdo do array no Console
        nomeDoAmigo.value = '';                                             ///limpa o campo de nome do amigo

        let posicaoArray = (amigos.length -1);                              ///cria variavel para controlar qtde de nomes no array
        const listaAmigos = document.getElementById('listaAmigos');         ///vincula a variável à lista HTML
        listaAmigos.innerHTML = '';                                         ///limpa a lista HTML

        while (posicaoArray >= 0) {                                         ///verifica se já passou por todos os nomes no array
            console.log(`posicaoArray = ${posicaoArray}`)                   ///mostra conteúdo da variável no Console
            const novoItem = document.createElement('li');                  ///cria um novo elemento "li"
            novoItem.textContent = amigos[posicaoArray];                    ///adiciona o nome do array ao elemento "li"
            listaAmigos.appendChild(novoItem);                              ///adiciona o conteúdo do elemento "li" na lista
            posicaoArray--;                                                 ///retorna o ponteiro do array (decremento)
        }
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {                                              ///verifica se array está vazio
        alert('ERRO!!! Não há amigos cadastrados. Cadastre amigos.');       ///mensagem caso array esteja vazio
        return;                                                             ///retorna para "corrigir a falha" (cadastrar amigos)
    }
    let posicaoArrayAmigos = gerarNumeroAleatorio();                        ///chama a geração de número aleatório (posição correspondente ao amigo sorteado)
    exibirAmigoSorteado(posicaoArrayAmigos);                                ///chama a função de exibir o nome do amigo correspondente ao número aleatório (posição no array)
}

function gerarNumeroAleatorio() {
    let qtdeAmigos = (amigos.length -1);                                    ///cria variável com quantidade de amigos cadastrados (o "-1" é por causa da posição ZERO no array)
    let numeroEscolhido = Math.floor(Math.random() * qtdeAmigos);           ///escolhe um nº aleatório (Math.floor = parseInt)

    console.log(numeroEscolhido)                                            ///apresenta o nº escolhido no Console
    return numeroEscolhido;                                                 ///retorna o nº escolhido (posição no array)
}

/// Função para exibir o amigo sorteado
function exibirAmigoSorteado(index) {
    let amigoSorteado = document.getElementById('resultado');               ///vincula variável ao objeto RESULTADO na tela HTML
    amigoSorteado.innerHTML = `<li>${amigos[index]}</li>`;                  ///apresenta o nome correspondente à posição no array (nº aleatório)
}






