// 06-02.js 복사
<<<<<<< HEAD
<<<<<<< HEAD
function f1(callback){
=======
function f1(){
>>>>>>> 60b8484 (🚧)
=======
function f1(callback){
>>>>>>> 888ebae (🚧)
  console.log(`2. f1 작업 시작.`);
  console.log(`3. f1 작업중...`);

  setTimeout(() => {
    // ......
    console.log(`4. f1 작업 종료.`);
<<<<<<< HEAD
<<<<<<< HEAD
    callback(`f1의 결과물`);
=======
    return (`f1의 결과물`);
>>>>>>> 60b8484 (🚧)
=======
    callback(`f1의 결과물`);
>>>>>>> 888ebae (🚧)
  }, 1000);
  
}

<<<<<<< HEAD
<<<<<<< HEAD
function f2(f1Result, callback){
=======
function f2(f1Result){
>>>>>>> 60b8484 (🚧)
=======
function f2(f1Result, callback){
>>>>>>> 888ebae (🚧)
  console.log(`5. ${f1Result}로 f2 작업 시작.`);
  console.log(`6. f2 작업중...`);

  setTimeout(() => {
    // ......
    console.log(`7. f2 작업 종료.`);
<<<<<<< HEAD
<<<<<<< HEAD
    callback(`최종 결과물`);
=======
    return (`최종 결과물`);
>>>>>>> 60b8484 (🚧)
=======
    callback(`최종 결과물`);
>>>>>>> 888ebae (🚧)
  }, Math.random() * 2000);
}

function test(){
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 888ebae (🚧)
  f1((f1Result) => {
    f2(f1Result, (result) => {
      console.log('8.', result);
    });
  });
<<<<<<< HEAD
=======
  const f1Result = f1();
  const result = f2(f1Result);
  console.log('8', result);
>>>>>>> 60b8484 (🚧)
=======
>>>>>>> 888ebae (🚧)
}

console.log('1. 테스트 시작.');
test();
console.log('9. 테스트 완료.');
