const majors = students
  .map((s) => s.major)
  .filter((major, index, arr) => arr.indexOf(major) === index);

 

console.log(majors);