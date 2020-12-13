const string = "Привет! Как дела? Что делаешь?";

const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

const getVowels = stringToFilter => {
    let extractedVowels = ""
    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if(vowels.includes(currentLetter)) {
            extractedVowels = extractedVowels + currentLetter;
        }
    }
    return extractedVowels;
}

console.log(getVowels(string));