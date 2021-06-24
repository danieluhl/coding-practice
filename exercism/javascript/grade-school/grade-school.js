//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }
  roster() {
    // return a copy of the roster
    return Object.entries(this._roster).reduce((acc, [grade, students]) => {
      acc[grade] = [...students];
      return acc;
    }, {});
  }

  remove(name) {
    Object.entries(this._roster).forEach(([grade, students]) => {
      if (students.includes(name)) {
        students = students.splice(students.indexOf(name), 1);
      }
    });
  }

  add(name, grade) {
    // remove from previous grade if the student was already there
    this.remove(name);
    this._roster[grade] = this._roster[grade] || [];
    this._roster[grade].push(name);
    this._roster[grade].sort();
  }

  grade(grade) {
    const gradeRoster = this._roster[grade] || [];
    return [...gradeRoster];
  }
}
