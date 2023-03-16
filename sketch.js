var hungrySquare
var coin


function setup() {
    new Canvas(1400, 400);
    hungrySquare = new Sprite();
    hungrySquare.width = 50;
    hungrySquare.width = 50;
    positionX = random

    coin = new Sprite(400, 50, 30);
    coin.color = 'yellow';
    
}

function draw() {
    background(255, 255, 255);
  
    clear();
    hungrySquare.moveTowards(mouse);
    if (hungrySquare.overlaps(coin)) hungrySquare.width += 10; 
    if (hungrySquare.overlaps(coin)) hungrySquare.height += 10; 
    if (hungrySquare.overlaps(coin)) coin.remove();

}


