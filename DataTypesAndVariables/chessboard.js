function chessboard(fields) {
    console.log('<div class="chessboard">')
    let blackTemplate = '    <span class="black"></span>';
    let whiteTemplate = '    <span class="white"></span>';
    for (let index = 0; index < fields; index++) {
        console.log('  <div>');
        for (let index1 = 0; index1 < fields; index1++) {
            if (index % 2 == 0) {
                if (index1 % 2 == 0) {
                    console.log(blackTemplate);
                } else {
                    console.log(whiteTemplate);
                }
            } else {
                if (index1 % 2 == 0) {
                    console.log(whiteTemplate);
                } else {
                    console.log(blackTemplate);
                }
            }
        }
        console.log('  </div>');
    }
    console.log('</div>');
}