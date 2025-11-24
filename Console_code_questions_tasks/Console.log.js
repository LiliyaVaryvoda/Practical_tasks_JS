// 1. CONSOLE NUMBERS REPEATED

// 1
// 22
// 333
// 4444
// 55555

function consoleNumbersRepeated(num){
    for (let i = 1; i <= num; i++){
        console.log(String(i).repeat(i))
    }
}

consoleNumbersRepeated(5)








// 2. CONSOLE NUMBERS REPEATED IN PYRAMID

// 1 
// 12 
// 123 
// 1234
// 12345
// 123456

function consoleNumbersPyramid(num){
    for (let i = 1; i <= num; i++){
        let row = ''
        for (let n = 1; n <= i; n++){
            row+=n
        }
        console.log(row)
    }
}

consoleNumbersPyramid(6)









// 3. CONSOLE DIAMOND PATTERN

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

function diamondPattern(num){
    for (let i = 1; i <= num; i++){
        console.log(' '.repeat(num-i) + '*'.repeat(i*2-1))
    }
    for (let i = num-1; i >= 1; i--){
        console.log(' '.repeat(num-i) + '*'.repeat(i * 2 -1))
    }
}

diamondPattern(4)







// 4. CONSOLE LOG THIS PATTERN

//    *
//    **
//    ***
//    ****

function consoleSimplePattern(num){
    for (let i = 1; i <= num; i++){
        console.log('*'.repeat(i))
    }
}

consoleSimplePattern(4)









// 5. CONSOLE SQUARE OF STARS


// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function consoleSquareOfStars(num) {
    for (let i = 0; i < num; i++){
        let row = ''
        for (let j = 0; j < num ; j++){
            row +='* '
        }
        console.log(row.trim())
    }
}

consoleSquareOfStars(5)








// 6. CONSOLE CHESSBOARD


// 0101
// 1010
// 0101
// 1010

function consoleChessBoard(num){
    for (let i = 1; i <= num; i++){
        let row = ''
        for (let r = 1; r <= num; r++){
            if ((i+ r) % 2 === 0){
                row += '0'
            }
            else{
                row+='1'
            }
        }
        console.log(row)
    }
}

consoleChessBoard(4)








// 7. CONSOLE MIRROR PIRAMIDE

// 1
// 121
// 12321
// 1234321

function consoleMirrorPyramide(num){
    for (let i = 1; i<= num; i++){
        //console.log(i)
        let row = ''
        for (let r = 1; r <=i; r++){
            row+=r
        }

        for (let r = i-1; r >=1; r--){
            row+=r
        }
        console.log(row)

    }
}

consoleMirrorPyramide(4)








// 8. PRINT MULTIPLICATION TABLE


//     1  2  3  4  5  6  7  8  9 10
//  1  1  2  3  4  5  6  7  8  9 10
//  2  2  4  6  8 10 12 14 16 18 20
//  3  3  6  9 12 15 18 21 24 27 30
//  4  4  8 12 16 20 24 28 32 36 40
//  5  5 10 15 20 25 30 35 40 45 50
//  6  6 12 18 24 30 36 42 48 54 60
//  7  7 14 21 28 35 42 49 56 63 70
//  8  8 16 24 32 40 48 56 64 72 80
//  9  9 18 27 36 45 54 63 72 81 90
// 10 10 20 30 40 50 60 70 80 90 100


function consoleMultiplicationTable(){
    let header = '    '
    for (let h =1 ; h<= 10; h++){
        header +=h.toString().padEnd(4)
    }
    console.log(header)
    for (let row = 1; row<=10; row++){
        let line = row.toString().padEnd(4)
        for (let column = 1; column<=10; column++){
            line+= (row*column).toString().padEnd(4)
        }
        console.log(line)
    }
}

consoleMultiplicationTable()