$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false
    });

    $('.manu-hamburguer').click(function(){
        $('nav').slideToggle() 
    })

    $('#telefone').mask('(00) 0000-0000', {
        placeholder: '(00) 0000-0000'
    })

    $('form').validate({
        rules: {
            nome:{
                required:true
            },
            email:{
                required:true,
                email: true
            },
            telefone:{
                required:true
            },
            veiculo:{
                required:true
            },  
            mensagem :{
                required:true
            } 
        },
        messages: {
            nome:'Por favor, insira o seu nome'
        },
        submitHandler:function(form){

        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculo button').click(function(){
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()
        
        $('#veiculo').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})