
/*function calculaImc(peso,altura){

    if(peso >= 0 && peso <= 1000 && altura >= 0 && altura <= 3.00){
        var imc = 0
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }
    else{
        return null
    }

    
}*/

function calculaImc(peso,altura){
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >=0 && peso <1000)
        return true;
    return false;
}

function validaAltura(altura){
    if(altura >=0 && altura <=3.00)
        return true;
    return false;
}