const students = [
  {
    name: "Ali",
    marks: [85, 90, 78, 92, 88],
    major: "Computer Science",
    getAvarage() {
      const total = this.marks.reduce((acc, mark) => acc + mark, 0);
      return total / this.marks.length;
    },
  },
  {
    name: "Sara",
    marks: [40, 45, 38, 50, 42],
    major: "Mathematics",
    getAvarage() {
      const total = this.marks.reduce((acc, mark) => acc + mark, 0);
      return total / this.marks.length;
    },
  },
  {
    name: "Hassan",
    marks: [70, 65, 80, 75, 72],
    major: "Computer Science",
    getAvarage() {
      const total = this.marks.reduce((acc, mark) => acc + mark, 0);
      return total / this.marks.length;
    },
  },
  {
    name: "Nour",
    marks: [95, 92, 98, 94, 95],
    major: " Physics",
    getAvarage() {
      const total = this.marks.reduce((acc, mark) => acc + mark, 0);
      return total / this.marks.length;
    },
  },
  {
    name: "Khalid",
    marks: [30, 35, 40, 25, 38],
    major: "Mathematics",
    getAvarage() {
      const total = this.marks.reduce((acc, mark) => acc + mark, 0);
      return total / this.marks.length;
    },
  },
  {
    name: "Lian",
    marks: [88, 76, 82, 90, 85],
    major: "Physics",
    getAvarage() {
      const total = this.marks.reduce((acc, mark) => acc + mark, 0);
      return total / this.marks.length;
    },
  },
];

const passed = students.filter((s) => s.getAvarage() > 50);
const failed = students.filter((s) => s.getAvarage() <= 50);

console.log(
  `Achievers: ${passed.length} ${((passed.length / students.length) * 100).toFixed(2)}%`,
);
console.log(
  `Failures: ${failed.length} ${((failed.length / students.length) * 100).toFixed(2)}%`,
);

console.log(students[0].getAvarage());

const top_student = students.reduce((best, s) =>
  s.getAvarage() > best.getAvarage() ? s : best,
);

const lowest_student = students.reduce((worst, s) =>
  s.getAvarage() < worst.getAvarage() ? s : worst,
);

console.log(
  `hight avg: ${top_student.name} ${top_student.getAvarage().toFixed(2)}%`,
);

console.log(
  `Lowest avg: ${lowest_student.name} ${lowest_student.getAvarage().toFixed(2)}%`,
);

const majors = students
  .map((s) => s.major)
  .filter((major, index, arr) => arr.indexOf(major) === index);

console.log(majors);

function get_major_avg(major_name) {
  const majorStudent = students.filter((s) => s.major === major_name);
  if (majorStudent.length === 0) return `No Students ${major_name}`;
  const total = majorStudent.reduce((acc,s)=> acc+s.getAvarage(),0);
  return (total / majorStudent.length).toFixed(2);
}

console.log("AVG Computer Science" ,get_major_avg("Computer Science"));
console.log("AVG Mathematics" ,get_major_avg("Mathematics"));
console.log("AVG Physics" ,get_major_avg("Physics"));

