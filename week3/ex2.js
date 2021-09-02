const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];

// use set
const justOneOfEach = [...new Set(letters)];
console.log(justOneOfEach);

// use indexOf and filter

const removeDuplicates = letters.filter((c, index) => {
    return letters.indexOf(c) === index;
});

console.log(removeDuplicates);


// use forEach and include

let newLetters = [];
letters.forEach((c) => {
    if (!newLetters.includes(c)) {
        newLetters.push(c);
    }
});

console.log(newLetters);

