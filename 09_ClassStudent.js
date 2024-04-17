class Student {
    constructor(rollNumber, name, division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    getDetail(){
        console.log(`Student Details:- RollNumber: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);
    }
}

const m = new Student( "01", "Madhuri", "A");
m.getDetail();

const b = new Student("02", "Neha", "A");
b.getDetail();

const e = new Student("03", "Shruti", "B");
e.getDetail();