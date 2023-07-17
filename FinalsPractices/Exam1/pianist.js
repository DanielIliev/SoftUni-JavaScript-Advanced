function pianist(entries) {
    let initialCount = Number(entries.shift());
    let initialSongs = entries.slice(0, initialCount);
    let commands = entries.slice(initialCount, entries.indexOf('Stop'));
    let songs = [];

    // Generate the initial songs objects
    for (const song of initialSongs) {
        let [piece, composer, key] = song.split('|');
        songs.push(generateSongObject(piece, composer, key));
    }

    // Process the received commands
    for (const command of commands) {
        let [commandType, ...commandValues] = command.split('|');

        switch (commandType) {
            case 'Add':
                let [song, composer, key] = commandValues;
                if (checkIfSongExists(songs, commandValues[0])) {
                    console.log(`${commandValues[0]} is already in the collection!`);
                } else {
                    songs.push(generateSongObject(song, composer, key));
                    console.log(`${song} by ${composer} in ${key} added to the collection!`);
                }   
                break;
            case 'ChangeKey':
                if (checkIfSongExists(songs, commandValues[0])) {
                    songs = changeSong(songs, commandValues);
                    console.log(`Changed the key of ${commandValues[0]} to ${commandValues[1]}!`);
                } else {
                    console.log(`Invalid operation! ${commandValues[0]} does not exist in the collection.`);
                }
                break;
            case 'Remove':
                if (checkIfSongExists(songs, commandValues[0])) {
                    songs = removeSong(songs, commandValues[0]);
                    console.log(`Successfully removed ${commandValues[0]}!`);
                } else {
                    console.log(`Invalid operation! ${commandValues[0]} does not exist in the collection.`);
                }
                break;

            default:
                break;
        }
    }

    // Print the songs in the required format
    for (const song of songs) {
        console.log(`${song.name} -> Composer: ${song.composer}, Key: ${song.key}`);
    }

    function checkIfSongExists(songs, songName) {
        let exists = false;
        for (const song of songs) {
            if (song.name === songName) {
                exists = true;
                break;
            }
        }
        return exists;
    }

    function changeSong(songs, newValues) {
        let [songName, songKey] = newValues;
        for (const song of songs) {
            if (song.name === songName) {
                song.key = songKey;
            }
        }
        return songs;
    }

    function removeSong(songs, songName) {
        for (let index = 0; index < songs.length; index++) {
            if (songs[index].name === songName) {
                songs.splice(index, 1);
            }
        }
        return songs;
    }

    function generateSongObject(name, composer, key) {
        return {
            name,
            composer,
            key
        }
    }

}
// pianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);

// pianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]);