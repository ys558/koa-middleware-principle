// 2. 简单封装第一步
async function fn1(next) {
  console.log(1);
  await next();
  console.log(1);
}

async function fn2(next) {
  console.log(2);
  await next();
  console.log(2);
}

async function fn3() {
  console.log(3);
}

let next1 = async function () {
  await fn2(next2);
}
let next2 = async function() {
  await fn3();
}
fn1(next1)