var botaoAdicionar = document.querySelector('a#teuCu')

botaoAdicionar.addEventListener("click", function(event){

    var formularioAdiciona = document.querySelector("form#adicionaPaciente")
    var paciente = obterpacienteFormulario(formularioAdiciona)

    adicionaPaciente(paciente)

})

/*function botaoAdiciona(){

    var formularioAdiciona = document.querySelector("form#adicionaPaciente")
    var paciente = obterpacienteFormulario(formularioAdiciona)

    adicionaPaciente(paciente)

}*/

function obterpacienteFormulario(form){

    var paciente = {
        peso:form.peso.value,
        altura:form.altura.value,
        nome:form.nome.value,
        gordura:form.gordura.value,
        //imc:calculaIMC(form.peso.value,form.altura.value)
    }

    return paciente

}

function adicionaPaciente(paciente){
    var pacienteTr = montaLinha(paciente)
    var tabela = document.querySelector('table#TabelaPacientes')
    tabela.appendChild(pacienteTr)

}

function montaLinha(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaCelula(paciente.nome,'info-nome'))
    pacienteTr.appendChild(montaCelula(paciente.peso,'info-peso'))
    pacienteTr.appendChild(montaCelula(paciente.altura,'info-altura'))
    pacienteTr.appendChild(montaCelula(paciente.gordura,'info-gordura'))
    pacienteTr.appendChild(montaCelula(paciente.imc,'info-imc'))

    return pacienteTr

}

function montaCelula(conteudo,classe){

    var elemento = document.createElement("td")

    elemento.textContent = conteudo
    elemento.classList.add(classe)

    return elemento

}