let numbers = { a: 13, b: 37, c: 42 };

const output = Object.entries(numbers).map(([key,num]) => {
    return num * 2;
});

console.log(output)
