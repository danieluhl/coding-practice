// example leetcode tree
module.exports = {
  val: 3,
  left: {
    val: 9,
    right: null,
    left: {
      val: 9,
      right: null,
      left: {
        val: 9,
        right: { val: 4, right: null, left: null },
        left: { val: 12, right: null, left: null },
      },
    },
  },
  right: {
    val: 20,
    right: { val: 15, right: null, left: null },
    left: { val: 7, right: null, left: null },
  },
};
