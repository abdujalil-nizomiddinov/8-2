console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });

  setTimeout(() => {
    console.log("D");
  }, 0);

  console.log("E");
}, 0);

Promise.resolve().then(() => {
  console.log("F");

  setTimeout(() => {
    console.log("G");

    Promise.resolve().then(() => {
      console.log("H");
    });

    console.log("I");
  }, 0);

  Promise.resolve().then(() => {
    console.log("J");
  });
});

console.log("K");

setTimeout(() => {
  console.log("L");

  Promise.resolve().then(() => {
    console.log("M");
  });

  console.log("N");
}, 0);

Promise.resolve().then(() => {
  console.log("O");
});

// a
// k
// f
// j
// 0
// b
// c
// e
// g
// h
// i
// l
// m
// n
// d
// ❌ Noto‘g‘ri. Sening yozgan natijangda 0 bor edi, lekin JavaScript chiqishda 0 hech qachon konsolga chiqmaydi. L, N, M bloklari G, I, Hdan oldin chiqadi.
