const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let arr = [];
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substr(i, 10));
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('*')) {
            arr[i] = ' ';
        } else {
            arr[i] = arr[i].replace(/00/g, '');
            arr[i] = arr[i].replace(/10/g, '.');
            arr[i] = arr[i].replace(/11/g, '-');
        }

        if (arr[i] != ' ') {
            arr[i] = MORSE_TABLE[arr[i]];
            result = arr.join('');
        }
    }
    return result;
}

module.exports = {
    decode
}