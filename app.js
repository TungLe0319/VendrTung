export class Snack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

snacks = [
  new Snack('Fresh Mochi', 1.25),
  new Snack('Boba Tea', 4.5),
  new Snack('Sushi Platter', 25.5),
  new Snack('Fresh Mochi', 1.25),
  new Snack('Fresh Mochi', 1.25),
];

let moneyDOM = document.getElementById('money');
let sushiPlatter$Dom = document.getElementById('sushiPlatter');
let pokeBowl$DOM = document.getElementById('pokeBowl');
