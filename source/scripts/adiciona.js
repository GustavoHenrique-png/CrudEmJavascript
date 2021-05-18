var botaoAdicionar = document.querySelector('a#botao')

botaoAdicionar.addEventListener("click", function(event){

    var formularioAdiciona = document.querySelector("form#adicionaPaciente")
    var paciente = obterpacienteFormulario(formularioAdiciona)

    adicionaPaciente(paciente)

})

function obterpacienteFormulario(form){

    var paciente = {
        peso:form.peso.value,
        altura:form.altura.value,
        nome:form.nome.value,
        gordura:form.gordura.value,
        imc:calculaIMC(form.peso.value,form.altura.value)
    }

    return paciente

}

function adicionaPaciente(paciente){
    var pacienteTr = montaLinha(paciente)
}

function montaLinha(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaCelula(paciente.nome))
    pacienteTr.appendChild(montaCelula(paciente.peso))
    pacienteTr.appendChild(montaCelula(paciente.altura))
    pacienteTr.appendChild(montaCelula(paciente.gordura))
    pacienteTr.appendChild(montaCelula(paciente.imc))



}

function montaCelula(conteudo,classe){

    var elemento = document.createElement("td")

    elemento.textContent = conteudo
    elemento.classList.add(classe)

    return elemento

}