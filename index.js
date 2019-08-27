function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== changeValue) {
      array[i] = changeValue;
    }
    if (array[i] === stopValue) {
      return array[i];
    }
  }
}