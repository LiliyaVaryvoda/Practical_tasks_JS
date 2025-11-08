// 1. COMPRESS STRING (aaabb → a3b2)


function compressStr(str) {
    let result = ''
    let count = 1

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
        }
        else {
            result += str[i] + count
            count = 1
        }
    }
    return result

}

console.log(compressStr('aaabb')) //a3b2
console.log(compressStr('aaabbccaaa')) //a3b2c2a3






// 2. DECOMPRESS STRING (a3b2 → aaabb)

function decompressString(str) {
    let finalResult = '';
    const regex = /[a-zA-Z]/;

    for (let i = 0; i < str.length; i++) {
        if (regex.test(str[i])) {
            continue
        } else {
            let numStr = str[i];
            while (i + 1 < str.length && /\d/.test(str[i + 1])) {
                numStr += str[i + 1];
                i++;
            }
            finalResult += str[i - numStr.length].repeat(Number(numStr));
        }
    }

    return finalResult;
}


console.log(decompressString('a3b2')) //aaabb
console.log(decompressString('a3b2a1c1b3')) //aaabbacbbb
console.log(decompressString('a11b2')) //aaaaaaaaaaaaabb