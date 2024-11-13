var itemList = [
  { no: 1, todo: '두부', done: true },
  { no: 2, todo: '계란', done: false },
  { no: 3, todo: '라면', done: true },
];

console.log(itemList[0]);
console.log(itemList[1]);

var [first, second] = itemList;
console.log(first.todo);
console.log(second.done);

//var [count, setCount] = useState(0);
//var state = useState(0);
//console.log(state[0]);
//console.log(state[1](state[0]+1));