
module.exports = function (matrix) {
  return (matrix || []).flatMap((it, idx) => idx % 2 ? it.reverse() : it);
  }
