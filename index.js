function writeCards(array, event){
    let cards = [];
    for (let i = 0; i < array.length; i++){

        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        console.log(message)
        cards.push(message)
    }
    return cards
}

function countDown(num){

    while (num >= 0){
        console.log(num)
        num--
    }
    
}