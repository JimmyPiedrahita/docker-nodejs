import crypto from "crypto";

const generate = (word) => {
  const hash = crypto.createHash('sha256');
  hash.update(word);
  const hashHex = hash.digest('hex');
  return hashHex;
};

export default generate;