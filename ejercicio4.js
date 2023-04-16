const VERDURA_PARA_SOPA="verdura";
const CARNE_PARA_SOPA="carne";
const POLLO_PARA_SOPA="pollo";
const AGUA_PARA_LA_SOPA="agua";
let verduraParaLaSopa= prompt("ingresa que ingrediente primero tener para la sopa");
let polloCarneParaLaSopa = prompt ("ingresa el segundo ingrediente para la sopa");
let aguaParaLaSopa = prompt ("tenes agua para la sopa");
let opcionCaldoCondimeto= confirm ("si es afirmativo tenes caldo en caso negativo tenes condimeto");

if ((VERDURA_PARA_SOPA==verduraParaLaSopa)&&(CARNE_PARA_SOPA==polloCarneParaLaSopa)&&(aguaParaLaSopa==AGUA_PARA_LA_SOPA)&&(opcionCaldoCondimeto)) {
    document.write("<h5>corta las verduras para la sopa</h5>");
    document.write("<h5>trozar la carne y cocinarla</h5>");
    document.write("<h5>todo eso en una cacerola con agua</h5>");
    document.write("<h5>con un caldito NORK</h5>");
} else if ((VERDURA_PARA_SOPA==verduraParaLaSopa)&&(polloCarneParaLaSopa==POLLO_PARA_SOPA)&&(AGUA_PARA_LA_SOPA==aguaParaLaSopa)&&(opcionCaldoCondimeto)){
    document.write("<h5>corta las verduras para la sopa</h5>");
    document.write("<h5>trozar el pollo y cocinarla</h5>");
    document.write("<h5>todo eso en una cacerola con agua</h5>");
    document.write("<h5>con un caldito NORK</h5>");
} else if ((VERDURA_PARA_SOPA==verduraParaLaSopa)&&(CARNE_PARA_SOPA==polloCarneParaLaSopa)&&(aguaParaLaSopa==AGUA_PARA_LA_SOPA)){
    document.write("<h5>corta las verduras para la sopa</h5>");
    document.write("<h5>trozar la carne y cocinarla</h5>");
    document.write("<h5>todo eso en una cacerola con agua</h5>");
    document.write("<h5>con un buen condimento</h5>");
} else if ((VERDURA_PARA_SOPA==verduraParaLaSopa)&&(polloCarneParaLaSopa==POLLO_PARA_SOPA)&&(AGUA_PARA_LA_SOPA==aguaParaLaSopa)){
    document.write("<h5>corta las verduras para la sopa</h5>");
    document.write("<h5>trozar el pollo y cocinarla</h5>");
    document.write("<h5>todo eso en una cacerola con agua</h5>");
    document.write("<h5>con un buen condimeto</h5>");
} else {
    document.write("<h1>NO PODEMOS REALIZAR LA SOPA </h1>");
}