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

    // Method check
    if (requestObj.hasOwnProperty('method')) {
        if (requestTypes.includes(requestObj['method']) === false) {
            throw new Error('Invalid request header: Invalid Method');
        }
    } else {
        throw new Error('Invalid request header: Invalid Method');
    }

    // URI Check
    const validURIpattern = new RegExp(/[^a-zA-Z0-9.]/, 'gim');

    StarURI:
    if (requestObj.hasOwnProperty('uri')) {
        if (requestObj['uri'] === '*') {
            break StarURI;
        } else if (requestObj['uri'].match(validURIpattern) || requestObj['uri'] === '') {
            throw new Error('Invalid request header: Invalid URI');
        }
    } else {
        throw new Error('Invalid request header: Invalid URI');
    }

    // Version check
    if (requestObj.hasOwnProperty('version')) {
        if (requestVersions.includes(requestObj['version']) === false) {
            throw new Error('Invalid request header: Invalid Version');
        }
    } else {
        throw new Error('Invalid request header: Invalid Version');
    }

    // Message check
    if (requestObj.hasOwnProperty('message')) {
        const msg = requestObj['message'];
        if (msg.includes('<') || msg.includes('>') || msg.includes('\\') || msg.includes('&') || msg.includes("'") || msg.includes('"')) {
            throw new Error('Invalid request header: Invalid Message');
        }
    } else {
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObj;
}

const result = requestValidator({
    method: 'GET',
    uri: '',
    version: 'HTTP/1.1',
    message: ''
});

console.log(result);