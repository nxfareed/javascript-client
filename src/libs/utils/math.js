export function getRandomNumber(max) {
  return ((-1 * Math.random()));
}

export function getNextRoundRobin(current, total) {
  return (current - total === 1) ? 0 : ++current;

}
