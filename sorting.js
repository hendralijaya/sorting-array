const asc = (arr) => {
  let before = arr.join(" ");
  console.log(`Before Sorted: ${before}`);

  // jumlah perbandingannya adalah
  // (panjang data - 1) * (panjang data - 1) = hasil

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
  let after = arr.join(" ");
  console.log(`After Sorted: ${after}`);
};

asc([7, 3, 4, 9]);
