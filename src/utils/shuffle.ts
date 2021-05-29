export function shuffle(array: string[]) {
  var current = array.length,
    temp,
    random;

  while (current !== 0) {
    random = Math.floor(Math.random() * current);
    current -= 1;

    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }

  return array;
}
