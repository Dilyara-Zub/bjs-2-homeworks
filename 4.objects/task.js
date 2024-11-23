function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age; 
  this.marks = [];
}

let student = new Student('Kate', 'женский', 25);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.hasOwnProperty('marks')) {
    this.marks.push(...marks)
  }
}
  

Student.prototype.getAverage = function (...marks) {
  if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  } else if(this.hasOwnProperty('marks')) {
    return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
  }   
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
