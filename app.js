//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//ocultar el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let solidity= document.getElementById("solidity");
crearBarra(solidity);
let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);
let rust = document.getElementById("rust");
crearBarra(rust);
let blockchain = document.getElementById("blockchain");
crearBarra(blockchain);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 17, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 17, 1, intervalJavascript);
        },100);
        const intervalSolidity = setInterval(function(){
            pintarBarra(solidity, 14, 2, intervalSolidity);
        },100);
        const intervalRust = setInterval(function(){
            pintarBarra(rust, 16, 3, intervalRust);
        },100);
        const intervalNodejs = setInterval(function(){
            pintarBarra(nodejs, 15, 4, intervalNodejs);
        },100);
        const intervalBlockchain = setInterval(function(){
            pintarBarra(blockchain, 12, 5, intervalBlockchain);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}