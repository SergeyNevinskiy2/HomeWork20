'use strict'

const howLiters = prompt('Сколько вам надо литров борща');

const povar = () => {


    if (isNaN(howLiters))  throw new Error ('Надо водить только цифры');
    if (howLiters === null) throw new Error ('Вы отменили');
    if (howLiters === '') throw new Error ('Вы ввели пустую строку');

    const potatoesForOneLiters = 0.075 * 4;
    const allPotatoes = Math.round(howLiters * potatoesForOneLiters) ;
    const price = allPotatoes * 13;
    
    return console.log (`Тебе необходимо на ${howLiters} литров - ${allPotatoes} кг картошки, на сумму ${price} гривны`)
}

povar()