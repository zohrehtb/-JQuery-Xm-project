$(document).ready(function(){

    $.ajax({
        'url': 'https://api.coinlore.net/api/tickers/',
        'type': 'GET',
        'dataType': 'json',
        'data': 'string',
        'success': function(response) {
            if (response.data) {
                var html = '';
                for (var i = 0; i < response.data.length; i++) {
                    if(response.data[i].symbol == 'BTC' || response.data[i].symbol == 'ETH'|| response.data[i].symbol == 'XRP'|| response.data[i].symbol == 'LTC'|| response.data[i].symbol == 'BCH'){
                        html += '<article class="crypto-widgets__item">';
                        html += '<header class="crypto-widgets__item__header">';
                        html += '<img class="crypto-widgets__item__img" src="assets/images/w_'+ response.data[i].symbol +'.png" alt="'+ response.data[i].symbol +'">';
                        html += '<h5 class="crypto-widgets__item__symbol">'+ response.data[i].symbol + '</h5>';
                        html += '<span class="crypto-widgets__item__name">'+ response.data[i].name +'</span>';
                        html += '</header>';
                        html += '<div class="crypto-widgets__item__prices">';
                        html += '<span class="crypto-widgets__item__usd-price">';
                        html += '<i class="fa fa-usd" aria-hidden="true"></i>'+ response.data[i].price_usd;
                        html += '</span>';
                        html += '<span class="crypto-widgets__item__percent">';
                        html += response.data[i].percent_change_1h;
                        html += '</span></div></article>';
                    }
                }
                $('#crypto-widgets').html(html);

            }
        }
    });

    $("#pwd").keyup(validatePassword);

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        nav: true,
        dots: false,
        loop: true,
        responsive:{
            0:{
                items:2,
            },
            780:{
                items:3,
            },
            1200:{
                items:5,
                nav: true,
            }
        }
    })
        
});

function validatePassword() {
    var password = $("#pwd").val();

    if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@%!])[0-9a-zA-Z@%!]{8,}$/)){
        $('#submit-button' ).removeClass('disabled');
        $('#submit-button').click(function () {
            $('.register__valid-msg').addClass('show');
        })
    }else{
        $('#submit-button' ).addClass('disabled');
        $('.register__valid-msg').removeClass('show');
    }

    if (password.match(/^[0-9a-zA-Z@%!]{8,15}$/)){
        $('#check-mount').removeClass( 'check-pwd__item--red').addClass( 'check-pwd__item--green');
    }
    else{
        $('#check-mount').removeClass( 'check-pwd__item--green').addClass( 'check-pwd__item--red');
    }

    if (password.match(/[0-9]+/)){
        $('#check-number').removeClass( 'check-pwd__item--red').addClass( 'check-pwd__item--green');
    }
    else{
        $('#check-number').removeClass( 'check-pwd__item--green').addClass( 'check-pwd__item--red');
    }

    if (password.match(/[a-z]+/)){
        $('#check-lowCase').removeClass( 'check-pwd__item--red').addClass( 'check-pwd__item--green');
    }
    else{
        $('#check-lowCase').removeClass( 'check-pwd__item--green').addClass( 'check-pwd__item--red');
    }

    if (password.match(/[A-Z]+/)){
        $('#check-upCase').removeClass( 'check-pwd__item--red').addClass( 'check-pwd__item--green');
    }
    else{
        $('#check-upCase').removeClass( 'check-pwd__item--green').addClass( 'check-pwd__item--red');
    }

    if (password.match(/[!@#$%^&*+=._-]+/)){
        $('#check-specialChars').removeClass( 'check-pwd__item--red').addClass( 'check-pwd__item--green');
    }
    else{
        $('#check-specialChars').removeClass( 'check-pwd__item--green').addClass( 'check-pwd__item--red');
    }
   
}
