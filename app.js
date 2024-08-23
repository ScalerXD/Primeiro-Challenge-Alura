const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

function btnEncriptar() {
    const textEncriptada = encriptar(textArea.value);
    mensagem.value = textEncriptada;
    textArea.value = '';
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDesencriptar() {
    const textDesencriptada = desencriptar(textArea.value);
    mensagem.value = textDesencriptada;
    textArea.value = '';
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    navigator.clipboard.writeText(mensagem.value)
        .then(() => {
            alert("Texto copiado com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
        });
    
}