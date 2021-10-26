async function fn1(next) {
  console.log(1);
  await fn2();
  console.log(1);
}

async function fn2(next) {
  console.log(2);
  await fn3();
  console.log(2);
}

async function fn3() {
  console.log(3);
}

function compose(middleware, oldNext) {
  return async function() {
    await middleware(oldNext);
  }
}

// 3. 第三步，将所有函数放在[]里，
const middlewares = [fn1, fn2, fn3];

let next ;

for (let i = middlewares.length - 1; i >= 0; i--) {
  next = compose(middlewares[i], next);
}
next();
