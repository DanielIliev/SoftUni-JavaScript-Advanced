function rectangleObj() {
    let rect = rectangle(4, 5, 'red');

    console.log(rect.width);
    console.log(rect.height);
    console.log(rect.color);
    console.log(rect.calcArea());

    function rectangle(width, height, color) {
        let capitalizedFirstLetter = color.split('').shift().toUpperCase();
        let restOfColor = color.split('');
        restOfColor.shift();
        restOfColor = restOfColor.join('');

        color = capitalizedFirstLetter + restOfColor;
        
        return {
            width: Number(width),
            height: Number(height),
            color,
            calcArea() {
                return this.width * this.height;
            }
        }
    }
}

rectangleObj();