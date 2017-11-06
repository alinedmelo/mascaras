
// Selecionando campo e aplicando ID
var telefone = document.querySelector('[data-mapping="telefone"] input');
telefone.id = 'telefone';

var cpf = document.querySelector('[data-mapping="cpf"] input');
cpf.id = 'cpf';


/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

// Aplicando regras da máscara com regex

// Telefone
function mascaraTel(v){
    v=v.replace(/\D/g,"");                  //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
// CPF
function mascaraCpf(v){
    v=v.replace(/\D/g,"");                                          // Remove tudo o que não é dígito
    v=v.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4");    // Coloca formatação CPF
    return v;
}


// Atalho para seleção de elemento por ID
function id(elemento){
	return document.getElementById(elemento);
}

// Executa função de máscara do ID informado
window.onload = function(){
    
	id('telefone').onkeyup = function(){
		mascara(this, mascaraTel);
    }
    id('cpf').onkeyup = function(){
        mascara(this, mascaraCpf);
	}
}

console.log(cpf.value);