
/* ***** Get Value Count From any Entered Text using Normal Function & Foreach ***** */
{
    let text = prompt("Enter Text");
    let VowelCount = GetVowelCount(text);
    console.log(`Vowel Count (Normal Function): ${VowelCount}`);

    /**
     * Counts the number of vowels in a given text.
     *
     * @param {string} text the text to count the vowels for
     * @returns {number} the number of vowels in the given text
     */
    function GetVowelCount(text) {
        let count = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        vowels.forEach(vowel => {
            for (let i = 0; i <= text.length; i++) {
                if (vowel === text.charAt(i).toLowerCase()) {
                    count++;
                }
            }
        })
        return count;
    }
}

/* ***** Get Value Count From any Entered Text using Arrow Function & Foreach ***** */
{
    /**
     * Counts the number of vowels in a given text.
     *
     * @param {string} text the text to count the vowels for
     * @returns {number} the number of vowels in the given text
     */
    const GetVowelCount = (text) => {
        let count = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        vowels.forEach(vowel => {
            for (let i = 0; i <= text.length; i++) {
                if (vowel === text.charAt(i).toLowerCase()) {
                    count++;
                }
            }
        })
        return count;
    }

    let text = prompt("Enter Text");
    let vowelCount = GetVowelCount(text);
    console.log(`Vowel Count (Arrow Function): ${vowelCount}`);
}