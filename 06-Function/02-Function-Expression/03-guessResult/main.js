function magic() {
    return function (x) {
      return x * 42;
    };
  }
  const answer = magic();// answer as f()
  const a2 = magic;
  console.log(answer); // * print function code
  console.log(answer(1337)); // **  '56154'
  console.log(magic(1337)(42)); // *** '1764'
  console.log(a2);