const r1 = require('readline').createInterface(process.stdin, process.stdout);
let n = Math.floor(Math.random() * 10);
let attempts = 1;
function question() {
    r1.question(`Попытка № ${attempts}. Введите число от 1 до 10: `, (cmd) => {
        if (+cmd === n) {
            r1.close();
            return console.log(`Вы угадали с ${attempts} попытки`);
        } else if (+cmd > n) {
            console.log('Введенное число больше загаданного');
        } else {
            console.log ('Введенное число меньше загаданного');
        }
        attempts++;
        question();
    });
}

question();