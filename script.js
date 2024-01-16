// Horoscope Message Generator Game

/*
*Summary. Builds a Horoscope message
*
*Description. A simple object that holds the functionality to build a horoscope message. It takes no parameters and generates a console message by calling .genMsg() on the object.

@return {void} Returns no value. But logs a horoscope message to the console.
*/
const messageBuilder = {
    constellation: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    luck: ['very bad', 'bad', 'normal', 'good', 'super good'],
    target: ['dogs', 'roses', 'mirrors', 'corners', 'birds', 'babies'],
    genMsg() {
        const constIndex = Math.floor(Math.random() * 12);
        const luckIndex = Math.floor(Math.random() * 5);
        const targetIndex = Math.floor(Math.random() * 6)
        console.log(`If you are ${this.constellation[constIndex]}. Your luck today is ${this.luck[luckIndex]}. You should watch out for ${this.target[targetIndex]}`);
    }
}

messageBuilder.genMsg();
