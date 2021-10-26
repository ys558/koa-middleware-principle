// 底层基本原理，在函数中调用下一个函数：
function fn1() {
  console.log(1)
  fn2();
  console.log(1)
}
function fn2() {
  console.log(2)
  fn3();
  console.log(2)
}

function fn3() {
  console.log(3)
  return;
}
fn1();