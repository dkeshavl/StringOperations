function done() {
    let inputStr = document.querySelector('#enteredString').value;
    let str = String(inputStr);

    document.querySelector('#len').innerText = str.length;
    document.querySelector('#low').innerText = str.toLowerCase();

    let wcount = 0, inWord = false;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || (ch === '_')) {
            if (!inWord) {
                wcount++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    document.querySelector('#tot').innerText = wcount;
    let consonants = 0;
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch == "A" || ch == "a" || ch == "E" || ch == "e" || ch == "I" || ch == "i" || ch == "O" || ch == "o" || ch == "U" || ch == "u") {
            vowels++;
        } else if (ch !== ' ' && !(ch >= '0' && ch <= '9')) {
            consonants++;
        }
    }
    document.querySelector('#con').innerText = consonants;
    document.querySelector('#vow').innerText = vowels;
    document.querySelector('#upp').innerText = str.toUpperCase();

    let len = str.length;
    let midN = (len - (len % 2)) / 2;
    let middle = (len % 2 === 0) ? str[midN - 1] + str[midN] : str[midN];
    document.querySelector('#mid').innerText = middle;

    let result = "";
    let tf = false;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if ((ch === " " || ch === "_" || ch === "-")) {
            tf = true;
        } else {
            if (tf) {
                result += str[i].toUpperCase();
                tf = false;
            } else
                result += ch.toLowerCase();
        }
    }
    document.querySelector('#cam').innerText = result;
}
