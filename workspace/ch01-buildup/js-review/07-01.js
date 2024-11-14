var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = 0;

array.forEach((item) => {
    if (item % 2 !== 0) {
        result += item;
    }
});

console.log(result);