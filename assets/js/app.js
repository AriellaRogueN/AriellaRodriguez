$(document).ready(function() {
// Inicio.

  let writing = str => {
    let arrayFromstr = str.split('');
    let i = 0;
    let printStr = setInterval(function() {
      let section = document.getElementById('text-me');
      section.innerHTML += arrayFromstr[i];
      i++;
      if (i === arrayFromstr.length) {
        clearInterval(printStr);
      }
    }, 150);
  };

  writing('Front-End Developer');

  // Efectos scroll

  $(window).scroll(function() {
    if ($(this).scrollTop() > 650) {
      $('#global-nav').show();
    } else {
      $('#global-nav').hide();
    }
  });
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#about-text').addClass('animated fadeInDown');
    } else {
      $('#about-text').removeClass('animated fadeInDown');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#about-info').addClass('animated fadeInUp');
    } else {
      $('#about-info').removeClass('animated fadeInUp');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
      $('#skill-title').addClass('animated fadeInUp');
    } else {
      $('#skill-title').removeClass('animated fadeInUp');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1300) {
      $('.img-up').addClass('animated fadeInUp');
    } else {
      $('.img-up').removeClass('animated fadeInUp');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1400) {
      $('.title').addClass('animated fadeInUp');
    } else {
      $('.title').removeClass('animated fadeInUp');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1400) {
      $('.toolup').addClass('animated fadeInUp');
    } else {
      $('.toolup').removeClass('animated fadeInUp');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1700) {
      $('#portfolio').addClass('animated fadeInUp');
    } else {
      $('#portfolio').removeClass('animated fadeInUp');
    }
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 1900) {
      $('#contact').addClass('animated fadeIn');
    } else {
      $('#contact').removeClass('animated fadeIn');
    }
  });
    

  // efectos imagenes

  $('.knowledge img').mouseover(function() {
    $(this).each(function() {
      $(this).css({ 'transform': 'scale(1.3)', });
    });
  }).mouseout(function() {
    $(this).css({ 'transform': 'none', });
  });

  $('.tools img').mouseover(function() {
    $(this).each(function() {
      $(this).css({'transform': 'scale(0.8)', });
    }); 
  }).mouseout(function() {
    $(this).css({ 'transform': 'none', });
  });

  // Portafolio. 
    

  // navegador x-s
  $('.fixed-action-btn').openFAB();
  $('.fixed-action-btn').closeFAB();
  $('.fixed-action-btn.toolbar').openToolbar();
  $('.fixed-action-btn.toolbar').closeToolbar();
        

  // bajar al hacer click en icono

  $('#globalIconDown').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $('#about').offset().top
    }, 2000);
  });

// Cambiando Images de fondo inicio
});

let images = ['glasses.jpg', 'programming.jpg', 'pc.jpg'];
$(function() {
  var i = 0;
  $('#in-init').css('background-image', 'url(assets/images/' + images[i] + ')');
  setInterval(function() {
    i++;
    if (i === images.length) {
      i = 0;
    }
    $('#in-init').css('background-image', 'url(assets/images/' + images[i] + ')');
  }, 4000);
});

