import "../libs/howler.js";

var zvuk = new Howl({
    src: ['../../../../Webpack/DateCalculator/js/music/zvuk.mp3']
 
});

var sound = new Howl({
    src: ['../../../../Webpack/DateCalculator/js/music/sound.mp3']
 
});

export { sound, zvuk }