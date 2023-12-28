function isStrongPassword(passwordText) {
    return passwordText.length >= 8 &&
            !passwordText.includes("password") &&
            /[A-Z]/.test(passwordText);
}

console.log(isStrongPassword("Qwerty")); // false - Too short 
console.log(isStrongPassword("passwordQwerty"));// false - Contains "password" 
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters 
console.log(isStrongPassword("Qwerty123")); // true