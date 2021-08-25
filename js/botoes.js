var botoesNavegador = document.querySelectorAll(".nav__secao-link")
var secaoSobre = document.querySelector("#sobre")
var secaoFormacao = document.querySelector("#formacao")
var secaoPortfolio = document.querySelector("#portfolio")


botoesNavegador.forEach(botao => {
    

    botao.addEventListener('click',(event)=>{
            if(botao.textContent == "Formação"){
            secaoSobre.setAttribute("class","escondeSesao")
            secaoPortfolio.setAttribute("class","escondeSesao")
            secaoFormacao.setAttribute("class","formacao")
        }
        else if(botao.textContent == "Sobre mim"){
            secaoFormacao.setAttribute("class","escondeSesao")
            secaoPortfolio.setAttribute("class","escondeSesao")
            secaoSobre.setAttribute("class","sobre")
        }
        else if(botao.textContent == "Portfólio"){  
            secaoFormacao.setAttribute("class","escondeSesao")
            secaoSobre.setAttribute("class","escondeSesao")
            secaoPortfolio.setAttribute("class","portfolio")
        }
    })
    
});

