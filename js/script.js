let prices = [];
let imgs = ['Big Mac', 'Cheeseburger', 'Mcwrap',
    'Double Chicken', 'Gran Crispy', 'Toast',
    'Le Ricche Bacon', 'Patate Regolari', 'Tasty Basket',
    'Chicken Wings', 'Chicken McNuggets'];


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(imgs);

for (let i = 0; i < 6; i++) {
    document.getElementById('foto' + (i + 1)).src = 'img/' + imgs[i] + '.png';
    document.getElementById('nome' + (i + 1)).innerHTML = imgs[i];
}

function rndPrices() {
    for (let i = 0; i < 6; i++) {
        let rndNum = (Math.random() * 10) + 1;
        rndNum = +rndNum.toFixed(2);
        prices.push(rndNum);
    }
};
rndPrices();

for (let i = 0; i < prices.length; i++) {
    document.getElementById('price' + (i + 1)).innerHTML = prices[i] + ' €';
}

let spese = [];
let budget = 50;
let somma = 0;
let rimanente = budget - somma;

function buy(index) {
    if (prices[index] < rimanente) {
        spese.push(prices[index]);
        somma = spese.reduce((ele, acc) => (acc + ele));
        somma = +somma.toFixed(2);
        document.getElementById('totale').innerHTML = somma;
        aggiorna();
    } else {
        alert('Il tuo budget non è sufficiente!');
    }
}

function reset() {
    somma = 0;
    spese = [];
    budget = 50;
    rimanente = 50;
    document.getElementById('totale').innerHTML = somma;
    document.getElementById('rimanente').innerHTML = rimanente + ' €';
    document.getElementById('saldo').style.color = 'black';
}

function aggiorna() {
    rimanente = budget - somma;
    rimanente = rimanente.toFixed(2);
    document.getElementById('rimanente').innerHTML = rimanente + ' €';
    if (rimanente<(budget*0.5)) {
        document.getElementById('saldo').style.color = '#ff4142';
    }
}