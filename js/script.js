$(document).ready(function(){


    //EFEITO FUMACA
    $('header, .info').ripples({
        dropRadius: 25,
        perturbance: 0.2
      });

    //BOTAO TOGGLER

    $('.navbar-toggles').click(function(){
        $('.navbar-toggler').togglesClass('change')
    })


    //MAGNIFIC POPUP PARA QUANDO CLICAR NA IMAGEM

    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery:{
            enabled: true
        }
    });

    // CARROSEL DE IMAGENS DO CARDAPIO
    $('.carrosel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });


      //CARROSEL DE IMAGEM DA CHURRASCARIA
      $('.fotos-churrascaria').slick({
          dots: true,
          autoplay: true,
          autoplaySpeed: 700,
          infinite: true,
          speed:500,
          arrows: false,
          fade: true,
          cssEase: 'linear'
      });

// FIXAR MENU DE NAVEGACAO NO TOPO DA PAGINA
  $(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 718){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  });

  //BOTAO VOLTAR AO TOPO

  // $(window).scroll(function(){
  //   let position = $(this).scrollTop();
  //   if(position >= 718){
  //     $('#voltar_top').addClass('scrollTop')
  //   } else {
  //     $('#voltar_top').removeClass('scrollTop')
  //   }
  // });

// SUAVIZA O SCROLL PARA NAVEGACAO

$('.nav-item a, header-limk, .btn-adiante, .navbar-brand').click(function(link){
  link.preventDefault();
  let target = $(this).attr('href');

  $('html, body').stop().animate({
    scrollTop: $(target).offset().top -25
  }, 1000);
  });

  
})