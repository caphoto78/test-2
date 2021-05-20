$(document).ready(function () {
  $.ajax({
    url: 'http://private-32dcc-products72.apiary-mock.com/product', success: function (result) {
      console.log(JSON.stringify(result[1], null, 4))
      $('.order__listing__row').clone().insertAfter('.order__listing__row').attr('id', 'order__listing__row__4713663');
      $('#order__listing__row__4713663 > .order__listing__item__name').text(result[1].name)
      $('#order__listing__row__4713663 > .order__listing__item__unit__price').text(result[1].price + '$')
      $('#order__listing__row__4713663 > .order__listing__item__total__price').text(result[1].price + '$')
      $('#order__listing__row__4713663 > .order__listing__item__name').append('<div></div>');
      $('#order__listing__row__4713663 > .order__listing__item__name > div').text(result[1].description);
    }
  })



});