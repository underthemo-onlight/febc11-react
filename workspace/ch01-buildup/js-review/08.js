// 지정한 수가 소수인지 여부를 반환
var isPrime = function (num) {
  console.time('소요 시간');
  console.log('소수 판별 시작.', num);


  // TODO: 소수 판별 코드
  let prime = num > 1; // 1은 소수가 아님.

  // 일부러 무식하게 돈다.
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break; // 소수가 아니라면 더 이상 i 증가하지 않고 for문 탈출
    }
  }

  console.log('소수 판별 결과.', prime);
  console.timeEnd('소요 시간');
  return prime;
};

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(1000000007);
isPrime(1000000008);
isPrime(1000000009);
