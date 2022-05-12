const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = [];

  for (let i = 0; i < horizontalJoin[0].length; i++) {
    const verticalArray = [];
    for (let j = 0; j < horizontalJoin.length; j++) {
      verticalArray.push(horizontalJoin[j][i]);
    }
    verticalJoin.push(verticalArray.join(""));
  }

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
