var tabela = document.querySelector("#TabelaPacientes")

    tabela.addEventListener("dblclick",function(event){

            event.target.parentNode.remove();  
            
    })
