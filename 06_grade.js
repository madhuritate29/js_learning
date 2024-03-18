
function gradeCalculation(marks){
    // invalid inputs
    if (marks==null || marks<=0 || isNaN(+marks)) {
        console.log(`Invalid input: ${marks}`);
    } else {
       if (marks>=90) {
        console.log(`Funtastic marks: ${marks}, Your grade is A+`);
        
       } else {
        if (marks>=75 && marks<90) {
            console.log(`Excellent marks: ${marks}, Your grade  is A`);
            
        } else {
            if (marks>=50 && marks <75) {
                console.log(`Good marks: ${marks}, Your grade  is B`);
            } else {
                if (marks>=35 && marks<50) {
                    console.log(`Marks is: ${marks}, Your grade  is C, Need improvement`);
                } 
                
            }
            
        }
        
       } 
    }

}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eight"); // NaN
gradeCalculation(undefined);
gradeCalculation(null); // 70