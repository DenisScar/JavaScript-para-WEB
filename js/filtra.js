var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //Criação de Expressão Regular (RegEx)
            if(!expressao.test(nome)){ //Testa a variável nome
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});


/* Alternativa à RegEx = método substr() (substring):

var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}

*/

