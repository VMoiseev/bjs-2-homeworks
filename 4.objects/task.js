function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Mark", "male", 35);
const student2 = new Student("Mary", "female", 29);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
  }  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined) {
    this.marks = [];
    for (let i = 0; i < marks.length; i++) {
      this.marks.push(marks[i]);
    }
  }
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined) {
    return "Нет оценок";
  }
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  if(this.subject !== undefined) { 
    delete this.subject;
  }
  if(this.marks !== undefined) { 
    delete this.marks;
  }
  this.excluded = reason;
}

student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage());
console.log(student1);

student2.setSubject("Geometry");
student2.addMark(3);
student2.addMark(2);
student2.addMark(2);
console.log(student2.getAverage());
student2.exclude('low grades')
console.log(student2);