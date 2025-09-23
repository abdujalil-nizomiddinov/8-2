console.log("S1");

setTimeout(() => {
  console.log("T1");
  Promise.resolve().then(() => {
    console.log("P3");
  });
  console.log("T1-end");
}, 0);

Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => {
    console.log("T2");
    Promise.resolve().then(() => {
      console.log("P5");
    });
    console.log("T2-end");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("P2");
  Promise.resolve().then(() => {
    console.log("P2-then");
  });
});

setTimeout(() => {
  console.log("T3");
}, 0);

console.log("S2");

// s1
// s2
// p1
// p2
// P2 - then;
// t1
// p3
// T1 - end;
// t2
// p5
// T2 - end;
// t3
// ❌ Noto‘g‘ri. Sen T1-end va P3ni joyini almashtirib qo‘yibsan, yana T3 oxirida emas, T2dan oldin chiqadi.
