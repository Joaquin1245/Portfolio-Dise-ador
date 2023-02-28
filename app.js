let menuVisible = false;
//función que oculta/muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que seleccione una opcion
    document.getElementById("nav").className = "";
    menuVisible = false;
}