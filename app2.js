console.log("start");

setTimeout(() => {
  console.log("t1");
  Promise.resolve().then(() => {
    console.log("p3");
  });
  console.log("t1-end");
}, 0);

Promise.resolve().then(() => {
  console.log("p1");
  setTimeout(() => {
    console.log("t2");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("p2");
});

console.log("sync-end");

// start
// sync - end;
// p1
// p2
// t1
// p3
// t1 - end;
// t2
// ❌ Noto‘g‘ri. Sen yozganda p3ni t1-enddan oldin qo‘yib yuborgansan.
