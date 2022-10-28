const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price > 0) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else return "Meal or price was not set correctly!";
  },
};

/*
// step 4
menu._meal = 100;
menu._price = 'Invalid';
console.log(menu);
*/

// step 8
menu.meal = "Burgers";
console.log("meal type: " + menu._meal);
menu.price = -50;
console.log("meal price: " + menu._price);

// step 11
console.log(menu.todaysSpecial);
