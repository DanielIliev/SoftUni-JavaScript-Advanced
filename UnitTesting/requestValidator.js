// 66 / 100 I want to cry cuz regex
function requestValidator(requestObj) {
    const requestTypes = [
        'GET',
        'POST',
        'DELETE',
        'CONNECT'
    ];

    const requestVersions = [
        'HTTP/0.9',
        'HTTP/1.0',
        'HTTP/1.1',
        'HTTP/2.0',
    ];

    if (requestObj.hasOwnProperty('method')) {
        if (requestTypes.includes(requestObj['method']) == false) {
            throw new Error('Invalid request header: Invalid Method');
        }
    } else {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (requestObj.hasOwnProperty('version')) {
        if (requestVersions.includes(requestObj['version']) == false) {
            throw new Error('Invalid request header: Invalid Version');
        }
    } else {
        throw new Error('Invalid request header: Invalid Version');
    }

    const validURIpattern = new RegExp(/[.]{0,1}([\w\d]{1,}[.]{1,}){1,}|[\*]{1}/, 'g');

    if (requestObj.hasOwnProperty('uri')) {
        if (requestObj['uri'].match(validURIpattern) === null) {
            throw new Error('Invalid request header: Invalid URI');
        }
    } else {
        throw new Error('Invalid request header: Invalid URI');
    }

    const invalidCharactersPattern = new RegExp(/[<>'"\&\\]/, 'g');

    if (requestObj.hasOwnProperty('message')) {
        if (requestObj['message'].match(invalidCharactersPattern)) {
            throw new Error('Invalid request header: Invalid Message');
        } 
    } else {
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObj;
}

let test = requestValidator(
    {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
      }
);

console.log(test);

// ⦁	uri - must be a valid resource address or an asterisk (*); a
// resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
