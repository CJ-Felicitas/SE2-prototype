function addtocart() {
  var input = document.getElementsByName('cart[]');
  var name = document.getElementsByName('name[]');
  var price = document.getElementsByName('price[]');

  var elementspam = document.getElementById('spam');
  for (var i = 0; i < input.length; i++) {
    var a = input[i];
    var b = name[i].value;
    var c = price[i].value;
    if (input[i].checked) {
      elementspam.innerHTML += " <tr><td><input type='checkbox' class='input-x'  value='" + a.value + "' name='checkout[]' id='" + a.value + "'></td><td>" + b + "</td><td>" + c + "</td><td><input class='form-control' type='number' name='quantity[]' value='1' min='1' max='1000'></td><input type='hidden'  class='input-x' name='pricecount[]' value='" + c + "'></tr>";
    }
  }



}

