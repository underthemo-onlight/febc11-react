var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = 0;

var newArray = array.map((item) => {
    if (item % 2 !== 0) {
        result += item;
    } else {
        return 0;
    }
});

var newArray = array.map(num => num % 2 ? num : 0);

newArray.forEach(number => result += number);

console.log(result); // 25