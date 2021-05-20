$(document).ready(function () {
  $.ajax({
    url: 'http://private-32dcc-products72.apiary-mock.com/product', success: function (result) {
      console.log(JSON.stringify(result[1], null, 4))
    }
  })
});