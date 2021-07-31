function sortingArray(array) {
  // (panjang data - 1) * (panjang data - 1)=total perbandingan yang dibutuhkan
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Cara ES6 :)
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // Cara lama :)
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
      }
    }
  }
  return array;
}

let angka = [5, 7, 6, 2, 1];
console.log(sortingArray(angka));
// source=https://careerkarma.com/blog/javascript-bubble-sort/
// awalnya saya hanya kepikiran pakai method sort tapi saya penasaran mengenai ini jadi saya mencari cara lain
