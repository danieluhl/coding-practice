// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

function Size(width, height) {
  this.width = width;
  this.height = height;
  this.resize = (width, height) => {
    this.width = width;
    this.height = height;
  };
}
function Position() { }
function ProgramWindow() { }
function changeWindow() { }

export default {
  Size,
  Position,
  ProgramWindow,
  changeWindow,
};
