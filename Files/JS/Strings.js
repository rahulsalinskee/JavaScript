{
    let userInput = prompt("Enter your name: ");
    let userName = GetUserName(userInput);
    console.log(userName);

    /**
     * Returns a string which is the given userName but without any whitespace characters and in lower case. 
     * The returned string is also prepended with "@" and appended with the length of the returned string.
     * For example, if the given userName is "John Doe", the returned string will be "@johndoe8".
     * @param {string} userName the user name to transform
     * @returns {string} the transformed user name
     */
    function GetUserName(userName) {
        let userNameWithoutWhiteSpace = GetUserNameWithoutWhiteSpace(userName);
        let userNameInLowerCase = userNameWithoutWhiteSpace.toLowerCase();
        let userNameLength = userNameInLowerCase.length;
        return "@" + userNameInLowerCase + userNameLength;
    }

    /**
     * Returns a string which is the given userName but without any whitespace characters.
     *
     * @param {string} userName the string to remove whitespace from
     * @returns {string} the given userName but without any whitespace characters
     */
    function GetUserNameWithoutWhiteSpace(userName) {
        let userNameWithoutWhiteSpace = userName.replace(" ", "");
        return userNameWithoutWhiteSpace;
    }
}