// Task 1
function digitToWord(digit) {
    switch (digit) {
        case 'zero':
            console.log(0);
        break;
        case 'one':
            console.log(1);
        break;
        case 'two':
            console.log(2);
        break;
        case 'three':
            console.log(3);
        break;
        case 'four':
            console.log(4);
        break;
        case 'five':
            console.log(5);
        break;
        case 'six':
            console.log(6);
        break;
        case 'seven':
            console.log(7);
        break;
        case 'eight':
            console.log(8);
        break;
        case 'nine':
            console.log(9);
        break;
    }
}
// Task 2
function primeNumber(num) {
    let primeContender = Number(num);
    let isPrime = true;
    
    if (primeContender == 1) {
        console.log('false');
    } else if (primeContender > 1) {
        for (let index = 2; index < primeContender; index++) {
            if (primeContender % index == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) console.log('true');
    else console.log('false');
}
// Task 3
function coneVolumeAndSurface(radius, height) {
    let h = Number(height);
    let r = Number(radius);
    // Volume
    let volume = 0;
    volume = (Math.PI * Math.pow(r,2) * h)/3;
    console.log(`volume = ${volume.toFixed(4)}`);

    // Total Surface Area
    let slantSurface = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let lateralSurface = Math.PI * r * slantSurface;
    let baseSurface = Math.PI * Math.pow(r, 2);
    let totalSurfaceArea = lateralSurface + baseSurface;
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
// Task 4
function biggestOfThree(a,b,c) {
    let numbers = [a,b,c];
    for (let index = 0; index < numbers.length-1; index++) {
        for (let index1 = 0; index1 < numbers.length - 1 - index; index1++) {
            if (numbers[index] > numbers[index+1]) {
                const temp = numbers[index];
                numbers[index] = numbers[index+1];
                numbers[index+1] = temp;
            }
        }
    }
    console.log(numbers[numbers.length-1]);
}
// Task 5
function binaryToDecimal(binary) {
    let total = 0;
    let binaryArr = binary.split('');
    binaryArr = binaryArr.reverse();
    for (let index = 0; index < binaryArr.length; index++) {
        if (binaryArr[index] == '1') {
            total+=Math.pow(2, index);
        }
    }
    console.log(total);
}
// Task 6
function chessboard(fields) {
    console.log('<div class="chessboard">')
    let blackWhiteBlackTemplate = '    <span class="black"></span>';
    let whiteBlackWhiteTemplate = '    <span class="white"></span>';
    for (let index = 0; index < fields; index++) {
        console.log('  <div>');
        for (let index1 = 0; index1 < fields; index1++) {
            if (index % 2 == 0) {
                if (index1 % 2 == 0) {
                    console.log(blackWhiteBlackTemplate);
                } else {
                    console.log(whiteBlackWhiteTemplate);
                }
            } else {
                if (index1 % 2 == 0) {
                    console.log(whiteBlackWhiteTemplate);
                } else {
                    console.log(blackWhiteBlackTemplate);
                }
            }
        }
        console.log('  </div>');
    }
    console.log('</div>');
}
// Task 7
function triangleArea(side1,side2,side3) {
    let semiPerimeter = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    console.log(area);
}