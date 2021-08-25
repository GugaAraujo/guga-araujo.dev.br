var menu = document.getElementById("menu")
var paginaToda = document.getElementById("conteudo")
var links = document.querySelectorAll(".aside__links")
var conteudoMenu = document.querySelector(".aside")

function abrirMenuLateral(){
    menu.setAttribute("class","menuOculto")
    menu.style.width="320px"
    paginaToda.style.marginLeft="320px"
    links.forEach(link =>{
        link.addEventListener("click",()=>{
            fecharMenuLateral()
        })
    })

}
function fecharMenuLateral(){
    conteudoMenu.setAttribute("class","invisivel")
    setTimeout(()=>{
        menu.style.width="0"
        paginaToda.style.marginLeft="0"
    },150)
    setTimeout(()=>{
        menu.setAttribute("class","nav-links")
        conteudoMenu.setAttribute("class","aside")
    },150)
    
}