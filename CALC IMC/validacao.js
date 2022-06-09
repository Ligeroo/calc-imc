function ValidarFormulario(){
let erro = "";

    if(document.getElementById("Nome").value.trim() == ""){
        erro = "- O campo nome é obrigatório!<br>"
    }

    if(document.getElementById("Telefone").value.trim() ==""){
        erro += "- O campo telefone é obrigatório!<br>";
    }

    if(document.getElementById("Email").value.trim() ==""){
        erro += "- O campo Email é obrigatório!<br>";
    }
    else if(validateEmail(document.getElementById("Email").value) == false){
        erro += "- O e-mail digitado não é válido!<br>";
    }

    if(document.getElementById("Cpf").value.trim() ==""){
        erro += "- O campo CPF é obrigatório!<br>";
    }

    else if(validarCPF(document.getElementById("Cpf").value) == false){
        erro += "- O CPF digitado é inválido!<br>";
    }

	if (document.getElementById("Bairro").selectedIndex == 0){
		erro += "- O bairro é obrigatório!<br>";
	}

	let opcoes = document.getElementsByName("FormaContato");
	let selecionados = 0;
	for (let i=0; i<opcoes.length; i++){
		if(opcoes[i].checked){
			selecionados += 1;
			break;
		}
	}

	if (selecionados == 0){
		erro += "- O campo Forma de Contato é obrigatório!<br>";
	}

	opcoes = document.getElementsByName("Servico");
	selecionados = 0;
	for (i=0; i<opcoes.length; i++){
		if(selecionados < 2){
			if(opcoes[i].checked){
				selecionados += 1;
			}
		}else{
			break;
		}
	}

	if (selecionados != 2){
		erro += "- Pelo menos 2 Serviços de Interesse devem ser selecionados!\n";
	}


	if (erro != ""){
		//coloca o conteúdo na div erro
        $('#erro').html("ATENÇÃO!<br><br>" + erro);
		//exibe o modal
		$('#erro').modal({
			fadeDuration: 1000
		});

        return false;
    }
    else{
        document.getElementById("frmContato").submit();
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

$(document).ready(function(){
	$('.date').mask('00/00/0000');
	$('.time').mask('00:00:00');
	$('.date_time').mask('00/00/0000 00:00:00');
	$('.cep').mask('00000-000');
	$('.phone').mask('0000-0000');
	$('.phone_with_ddd').mask('(00) 0000-0000');
	$('.license_plate').mask('SSS-0A00');
	$('.phone_us').mask('(000) 000-0000');
	$('.mixed').mask('AAA 000-S0S');
	$('.cpf').mask('000.000.000-00', {reverse: false});
	$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.money').mask('000.000.000.000.000,00', {reverse: true});
	$('.money2').mask("#.##0,00", {reverse: true});
	$('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
	  translation: {
		'Z': {
		  pattern: /[0-9]/, optional: true
		}
	  }
	});
	$('.ip_address').mask('099.099.099.099');
	$('.percent').mask('##0,00%', {reverse: true});
	$('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
	$('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
	$('.fallback').mask("00r00r0000", {
		translation: {
		  'r': {
			pattern: /[\/]/,
			fallback: '/'
		  },
		  placeholder: "__/__/____"
		}
	  });
	$('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
  });

  $('.datepicker').pickadate();