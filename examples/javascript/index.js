console.log("Hello world");

// generator
function* generator() {
  yield Promise.resolve();
}

// async await
async function asyncFunction() {
  await Promise.resolve();
}

// dynamic import
import("./antoher");

// do expression
function doExpression() {
  let a = do {
    if (x > 10) {
      ("big");
    } else {
      ("small");
    }
  };
}

// Object rest spread
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// decorator
function readable() {
  return function() {};
}

@readable()
class Stream {}
