//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// + | -

export class Rectangles {
  static count(input) {
    if (input.length === 0) {
      return 0;
    }
    // find rectangles by top left corner recursively
    // store list of corners visited
    // when in a corner, if you can go right then start a new top/left recursive 
    //  search with that new top/left as the target to get back to
    // else, recursively try next direction or current direction
    //   (order right, down, left, up) until we get back to the start corner
  }
  findRectangle(topLeft, direction   )
}
