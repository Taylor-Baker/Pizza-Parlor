// Business Logic //

function Pizza(size, toppings) {
  this.sizeCost = size;
  this.toppingsCost = toppings;
}

Pizza.prototype.calcPizzaCost = function() {
  return this.sizeCost + this.toppingsCost;
}

// User Interface Logic //

$(document).ready(function() {
  $("#order").click(function(event) {
    event.preventDefualt;
    let pizzaSize = parseInt($("input[type=radio]:checked").val());
    let pizzaToppings = parseInt($("input:checkbox:checked").length);
    
    let newPizza = new Pizza(pizzaSize, pizzaToppings);

    let totalPizzaCost = newPizza.calcPizzaCost();

    $('.output').text(`Your pizza will cost $${totalPizzaCost}.`);
  });
});