class Snack {
  constructor(name, price, url) {
    this.name = name;
    this.price = price;
    this.url = url;
  }
}

let snacks = [
  new Snack(
    'Fresh Mochi',
    1.25,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-i3ctKMb2F_Y%2FTj-KDG4RitI%2FAAAAAAAAAmA%2FULciGNSXg0A%2Fs1600%2FP8070214.JPG&f=1&nofb=1'
  ),
  new Snack(
    'Boba Tea',
    4.5,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dixiecrystals.com%2Fsites%2Fdefault%2Ffiles%2Frecipe%2FBoba-Tea-imperial.jpg&f=1&nofb=1'
  ),
  new Snack(
    'Sushi Platter',
    25.5,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fg9nif7zjcwa51.jpg%3Fauto%3Dwebp%26s%3D0915fcfc6d547a9c767ae1f04738580ac457c582&f=1&nofb=1'
  ),
  new Snack(
    'jalapeno Bomb',
    5.25,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sake2mecerritos.com%2Fwp-content%2Fuploads%2F2016%2F06%2F12-JALAPENO-BOMB.jpg&f=1&nofb=1'
  ),
  new Snack(
    'Veggie Tempura',
    3.25,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.washingtonpost.com%2Frf%2Fimage_1484w%2F2010-2019%2FWashingtonPost%2F2020%2F04%2F22%2FFood%2FImages%2Fv-virtualpantry_047_leadweb.JPG%3Ft%3D20170517&f=1&nofb=1'
  ),
  new Snack(
    'Poke Bowl',
    3.25,
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.atproperties.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F10%2FSunda-_-Poke-Bowl_-Horiz-1.jpg&f=1&nofb=1'
  ),
];


function drawCards(){
 let thingy= document.getElementById('cardSpot')
 let template = ''
 snacks.forEach(snack => {
  template += `  <div class="card m-2 px-2" style="width: 18rem">
  <img
    src="${snack.url}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body bg-dark text-light rounded-bottom">
    <h5 class="card-title">${snack.name}</h5>
    <p class="card-text">
      Some 
    </p>
    <a href="#" class="btn btn-danger">Buy</a>
    <span><p>${snack.price}</p></span>
  </div>
</div>`
 });
 thingy.innerHTML = template
}

let moneyDOM = document.getElementById('money');
// let sushiPlatter$Dom = document.getElementById('sushiPlatter');
// let pokeBowl$DOM = document.getElementById('pokeBowl');
// let jalapenoDOM = document.getElementById('');

drawCards()