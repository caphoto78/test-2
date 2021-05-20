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
  $('body>div').addClass('backdrop');
  $('table').before('<div class="modal"></div>');
  $('.modal').append('<div class="close"></div>')
  $('.modal').append('<h1>WAIT!</h1>')
  $('.modal').append('<h2>Don\'t leave!</h2>')
  $('.modal').append('<h3>Complete your order with 20% discount</h3>')
  $('.modal').append('<p>"Worth every penny!"</p>')
  $('.modal').append('<button>Complete my order</button>')
});