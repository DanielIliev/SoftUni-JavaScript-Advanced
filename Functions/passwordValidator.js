function passwordValidator(passString) {
    
    let isValid = true;

    if (checkPasswordLengthViolation(passString) == false) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (checkCharactersViolation(passString) == false) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (checkDigitsViolation(passString) == false) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }

    function checkPasswordLengthViolation(passwordString) {

        let isValidLength = false;
        let passwordStringLength = passwordString.length;

        if (passwordStringLength >= 6 && passwordStringLength <= 10) {
            isValidLength = true;
        }

        return isValidLength;
    }

    function checkCharactersViolation(passwordString) {

        let hasValidCharacters = true;
        let passwordStringLength = passwordString.length;

        for (let index = 0; index < passwordStringLength; index++) {
            let currentChar = passwordString[index];
            if (currentChar < 'A' || currentChar > 'Z') {
                if (currentChar < 'a' || currentChar > 'z') {
                    if (currentChar < '0' || currentChar > '9') {
                        hasValidCharacters = false;
                    }
                }
            }
        }

        return hasValidCharacters;
    }

    function checkDigitsViolation(passwordString) {

        let hasRequiredDigitsCount = false;
        let digitsCount = 0;
        let passwordStringLength = passwordString.length;

        for (let index = 0; index < passwordStringLength; index++) {
            if (passwordString[index] >= '0' && passwordString[index] <= '9') {
                digitsCount++;
            }
        }

        if (digitsCount >= 2) {
            hasRequiredDigitsCount = true;
        }

        return hasRequiredDigitsCount;
    }
}
// passwordValidator('logIn');