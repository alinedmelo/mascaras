
// Selecionando campo e aplicando ID
var telefone = document.querySelector('[data-mapping="telefone"] input');
telefone.id = 'telefone';


/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function mascaraTel(v){
    v=v.replace(/\D/g,"");                  //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function id(elemento){
	return document.getElementById(elemento);
}

window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara(this, mascaraTel);
	}
}

