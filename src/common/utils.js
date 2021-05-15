export function randomCoordinate() {
  const letter = 'ABCDEFGH';
  const x = Math.ceil(Math.random() * 8);
  const y = Math.ceil(Math.random() * 8);
  return letter[x - 1] + y;
}
