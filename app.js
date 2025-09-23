console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => {
    console.log("3");
  });
  console.log("4");
}, 0);

Promise.resolve().then(() => {
  console.log("5");
  Promise.resolve().then(() => {
    console.log("6");
  });
  setTimeout(() => {
    console.log("7");
  }, 0);
});

console.log("8");

// 1
// 8
// 5
// 6
// 2
// 3
// 4
// 7
// ✅ To‘g‘ri.
