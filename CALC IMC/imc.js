function calcularimc() {
    let peso = document.getElementById("Peso").value;
    let altura = document.getElementById("Altura").value;
    let imc = 0;
    let resultado;

    imc = peso / (altura * altura);

    if (imc < 18.5) {
        resultado = "Abaixo Do Peso";
    }
    else if (imc >= 18.5 && imc < 25) {
        resultado = "Peso Normal";
    }
    else if (imc >= 25 && imc < 30) {
        resultado = "SobrePeso";
    }
    else if (imc >= 30 && imc < 35) {
        resultado = "Obesidade";
    }
    else if (imc >= 35 && imc < 40) {
        resultado = "Obesidade 2";
    }
    else {
        resultado = "Obesidade 3";
    }

    let erro = "";

    if (document.getElementById("Peso").value.trim() == "") {

        erro = "- O campo peso é obrigatório!<br>"

    }
    if (document.getElementById("Altura").value.trim() == "") {

        erro += "- O campo altura é obrigatório!<br>";
    }
    if (erro != "") {
        //coloca o conteúdo na div erro
        $('#erro').html("ATENÇÃO!<br><br>" + erro);
        //exibe o modal
        $('#erro').modal({
            fadeDuration: 300
        });
        return false;
    }
    else {
        $('#resultado').html("IMC<br><br>" + imc + "<br>" + resultado + "<br>");
        $('#resultado').modal({
            fadeDuration: 300
        });
    }
}
    // }if (erro != "") {
    //     $("#erro").html("Atenção! <br><br>" + erro);

    //     $('#erro').modal({
    //         fadeDuration: 500
    //     });

    //     return false;
    // }
    // else {
    //     document.getElementById("calcularimc").submit();
    // }

    // document.write(nome + " Possui o Imc " + imc + " e Está" + resultado);
    // ouu
    // alert(nome +"Possui o Imc" + imc + "e está" + resultado);
    $(document).ready(function(){
        $('.peso').mask("##0.000", {reverse: true});
        $('.altura').mask('0.00');
        $('.date').mask('00/00/0000');
        $('.time').mask('00:00:00');
        $('.date_time').mask('00/00/0000 00:00:00');
        $('.cep').mask('00000-000');
        $('.phone').mask('0000-0000');
        $('.phone_with_ddd').mask('(00) 0000-0000');
        $('.phone_us').mask('(000) 000-0000');
        $('.mixed').mask('AAA 000-S0S');
        $('.cpf').mask('000.000.000-00', {reverse: true});
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