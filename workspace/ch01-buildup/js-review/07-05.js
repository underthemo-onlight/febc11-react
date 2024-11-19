var array = [2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = array.reduce((sum, num) => {
    if (num % 2 !== 0) {
        return sum + num; // 홀수일때 sum에 num을 누적해서 반환
    } else {
        return sum; // 짝수일때 이전 sum을 그대로 반환
    }
}, 0);

var result = array.reduce((sum, num) => {
    return num % 2 ? (sum + num) : sum; // 홀수일때 누적한다.
}, 0);

var result = array.reduce((sum, num) => num % 2 ? (sum + num) : sum, 0);

var result = array.reduce((sum, num) => sum += (num % 2 && num), 0);

console.log(result); // 25