function modernHashtags(message) {

    let pattern = new RegExp(/#[a-zA-Z]+/, 'gi');

    let specials = message.match(pattern);

    for (let special of specials) {
        console.log(special.slice(special.indexOf('#') + 1));
    }
}

modernHashtags('Nowadays everyone uses # to tag a #special word in #socialMedia');

console.log('\nSecond entry\n');

modernHashtags('The symbol # is known #variously in English-speaking #regions as the #number sign');