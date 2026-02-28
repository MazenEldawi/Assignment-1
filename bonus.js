
function createCounter(x) {
  let num = x;
  return {
    increment() {
      num++;
      return num;
    },
    decrement() {
      num--;
      return num;
    },
    reset() {
      num = x;
      return num;
    },
  };
}

let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
