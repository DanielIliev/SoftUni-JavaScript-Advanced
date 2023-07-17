function cutAndReverse(input) {
    let sentence = input[0];
    let sentenceLength = sentence.length;
    let firstHalfReversed = sentence.toString().slice(0, sentenceLength / 2);
    let secondHalfReversed = sentence.toString().slice(sentenceLength / 2);

    let firstHalf = firstHalfReversed.split('').reverse();
    firstHalf = firstHalf.join('');
    console.log(firstHalf);

    let secondHalf = secondHalfReversed.split('').reverse();
    secondHalf = secondHalf.join('');
    console.log(secondHalf);

}

cutAndReverse(['tluciffiDsIsihTgnizamAoSsIsihT']);
cutAndReverse(['sihToDtnaCuoYteBIboJsihTtAdooGoSmI']);