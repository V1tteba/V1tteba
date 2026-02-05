const porta = document.getElementById("porta");
const cama = document.getElementById("cama");
const janela = document.getElementById("janela");
const espelho = document.getElementById("espelho");
porta.addEventListener("click", () => {
    window.location.href = "index.html"; 
});
cama.addEventListener("click", () => {
    window.location.href = "bed.html"; 
});
espelho.addEventListener("click", () => {
    window.location.href = "itsme.html"; 
});
janela.addEventListener("click", () => {
    window.location.href = "window.html"; 
});
