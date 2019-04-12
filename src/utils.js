/**
 * Fisher-Yates Shuffle algorithm
 * Return a new array -- the original is not altered
 */
const fyShuffle = array => {
  const shuffled = array.map(item => item);
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements
  }
  return shuffled;
};

module.exports.fyShuffle = fyShuffle;
