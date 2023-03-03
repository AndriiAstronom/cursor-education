//alert("fruit store")

//1 завдання

let priceBanana = 15.678;
let priceKiwi = 123.965;
let priceLime = 90.2345;

console.log(priceBanana, priceKiwi, priceLime);

//2 завдання
let maxPrice = Math.max(priceBanana, priceKiwi, priceLime);
let minPrice = Math.min(priceBanana, priceKiwi, priceLime);
console.log(maxPrice);
console.log(minPrice);

//3 завдання

let sumAll = (priceBanana + priceKiwi + priceLime);
console.log(sumAll);

let priceFloor = (Math.floor(priceBanana) + Math.floor(priceKiwi) + Math.floor(priceLime))
console.log(priceFloor);

//4 завдання

function evenOrOdd(priceFloor) {
    if (priceFloor % 2 === 0) {
        return (true);
    } else {
        return (false);
    }
}
console.log(evenOrOdd(priceFloor));

console.log(Math.ceil(sumAll));

//5 завдання

let rest = 500 - (sumAll);
console.log(rest);

//6 завдання
let midlBanan = (priceBanana).toFixed(2);
let midlKiwi = (priceKiwi).toFixed(2);
let midlLime = (priceLime).toFixed(2);
console.log(midlBanan, midlKiwi, midlLime);

//Hard

let random = Math.round(Math.random() * 101);

console.log(random);

let randomSale = Math.round(sumAll * random / 100);
console.log(randomSale);
let profit = Math.round((sumAll / 2 - randomSale) * 100) / 100;


console.log(`максимальна ціна : ${maxPrice}. Мінімальна ціна : ${minPrice}. Загальна вартість: ${sumAll}. Завкруглена сума товару до меншого: ${priceFloor}. Чи парне число: ${evenOrOdd(priceFloor)}.  Решта з 500: ${rest}. Знижка на товар:
${ randomSale }. Заробіток: ${ profit }
`)