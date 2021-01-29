// Business Logic //

function Pizza(size, toppings) {
  this.sizeCost = size;
  this.toppingsCost = toppings;
}

Pizza.prototype.calcPizzaCost = function() {
  return this.sizeCost + this.toppingsCost;
}

// User Interface Logic //