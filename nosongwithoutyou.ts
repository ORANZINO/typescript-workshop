import purge from './purge';

var artist = "honne";
let song = "no song without you";

purge();

const littleFinger = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("새끼 손가락");
    }, 100);
});

littleFinger.then(console.log);