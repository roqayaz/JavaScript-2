const createBase = (num) => {
    function addNine(num) {
        return num + 9
    }
    return addNine
};

const addNine = createBase(6);
console.log(addNine(6));
console.log(addNine(15));
console.log(addNine(24));

