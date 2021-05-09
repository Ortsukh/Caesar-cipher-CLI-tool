const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const ENCRYPTION = "encode";

const cipher = (text, shift, mode = ENCRYPTION) => {
  if (mode !== ENCRYPTION) {
    shift *= -1;
  }
  return text
    .split("")
    .map((symbol) => {
      const lowerCase = symbol.toLowerCase();

      const index = alphabet.indexOf(lowerCase);
      if (index >= 0) {
        const isLowerCase = symbol === lowerCase;
        let shiftedIndex = (index + +shift) % alphabet.length;
        if (shiftedIndex < 0) {
          shiftedIndex += alphabet.length;
        }
        let image = alphabet[shiftedIndex];
        if (!isLowerCase) {
          image = image.toUpperCase();
        }
        return image;
      } else {
        return symbol;
      }
    })
    .join("");
};

module.exports = { cipher };
