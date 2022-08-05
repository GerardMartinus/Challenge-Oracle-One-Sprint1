let texto = document.getElementById("entrada-texto1");
let texto2 = document.getElementById("entrada-texto2");

let botaoCriptografar = document.getElementById("criptografar");
let botaoDesriptografar = document.getElementById("descriptografar");
let botaoCopiar = document.getElementById("copiar");


botaoCriptografar.onclick = criptografa;
botaoDesriptografar.onclick = descriptografa;
botaoCopiar.onclick = copiar;


let imagem = document.querySelector("#resultado img");

function criptografa(){
    let textoCriptografado = texto.value;
     
    let resultado = textoCriptografado
    .replaceAll("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat");

    texto2.value = resultado;
}

function descriptografa(){
    let textoCriptografado = texto.value;
     
    let resultado = textoCriptografado
    .replaceAll("enter", "e")
    .replace("imes", "i")
    .replace("ai", "a")
    .replace("ober", "o")
    .replace("ufat", "u");

    texto2.value = resultado;
}

function copiar(){
    conteudo = document.getElementById("entrada-texto2");

    conteudo.select();
    document.execCommand("cut");

}

// if (texto2 = false){
//     imagem.style.display = "none";
// } else {
//     imagem.style.display = "block";
// }

if (texto2.value == true){
    imagem.style.display = "none";
} else {
    imagem.style.display = "block";
}


