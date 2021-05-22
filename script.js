$(document).ready(function () {
  $.ajax({
    url: 'http://private-32dcc-products72.apiary-mock.com/product', success: function (result) {
      console.log(JSON.stringify(result[1], null, 4))
      $('.order__listing__row').clone().insertAfter('.order__listing__row').attr('id', 'order__listing__row__4713663');
      $('#order__listing__row__4713663 > .order__listing__item__name').text(result[1].name);
      $('#order__listing__row__4713663 > .order__listing__item__unit__price').text(result[1].price + '$');
      $('#order__listing__row__4713663 > .order__listing__item__total__price').text(result[1].price + '$');
      $('#order__listing__row__4713663 > .order__listing__item__name').append(document.createElement('div')); //is faster
      $('#order__listing__row__4713663 > .order__listing__item__name > div').text(result[1].description);
    }
  })

  $('table').before(document.createElement('div'));
  $('body>div').addClass('backdrop hide');
  $('table').before('<div class="modal"></div>');
  $('.modal').addClass('hide');
  $('.modal').append('<div class="close"></div>');
  $('.modal').append('<h1>WAIT!</h1>');
  $('.modal').append('<h2>Don\'t leave!</h2>');
  $('.modal').append('<h3>Complete your order with 20% discount</h3>');
  $('.modal').append('<p>"Worth every penny!"</p>');
  $('.modal').append('<button>Complete my order</button>');

  $('.close').click(function (e) {
    e.preventDefault();
    $('.modal').addClass("hide");
    $('.backdrop').addClass("hide");
  });

  $('button').click(function () {
    $('.modal').addClass("hide");
    $('.backdrop').addClass("hide");
    var t1 = $('#order__listing__row__4713662 > .order__listing__item__unit__price').text();
    var t2 = $('#order__listing__row__4713662 > .order__listing__item__total__price').text();
    var t3 = $('#order__listing__row__4713663 > .order__listing__item__unit__price').text();
    var t4 = $('#order__listing__row__4713663 > .order__listing__item__total__price').text();
    $('#order__listing__row__4713662 > .order__listing__item__unit__price').text((parseInt(t1, 10) * 0.8).toFixed(2) + '$');
    $('#order__listing__row__4713662 > .order__listing__item__total__price').text((parseInt(t2, 10) * 0.8).toFixed(2) + '$');
    $('#order__listing__row__4713663 > .order__listing__item__unit__price').text((parseInt(t3, 10) * 0.8).toFixed(2) + '$');
    $('#order__listing__row__4713663 > .order__listing__item__total__price').text((parseInt(t4, 10) * 0.8).toFixed(2) + '$');
    // $('#order__listing__row__4713663 > .order__listing__item__total__price').text(result[1].price + '$');
  });

  $('html').one('mouseleave', (function (e) {
    if (e.pageY - $(window).scrollTop() <= 1) {
      $('.modal').removeClass("hide");
      $('.backdrop').removeClass("hide");
    }
  }));

});