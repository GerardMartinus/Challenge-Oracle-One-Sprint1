let texto = document.getElementById("entrada-texto1");
let texto2 = document.getElementById("entrada-texto2");
let conteudo1 = document.querySelector("h3");
let conteudo2 = document.querySelector("p");

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
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    texto2.value = resultado;
    imagem.style.display = "none";
    conteudo1.style.display = "none";
    conteudo2.style.display = "none";
}

function descriptografa(){
    let textoCriptografado = texto.value;
     
    let resultado = textoCriptografado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    texto2.value = resultado;
}

function copiar(){
    conteudo = document.getElementById("entrada-texto2");

    conteudo.select();
    document.execCommand("cut");

}

let carateres = texto2.length;

if (carateres >= 1){
    
} else {
    imagem.style.display = "block";
}


