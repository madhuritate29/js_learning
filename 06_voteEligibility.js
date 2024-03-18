
function voteEligible(age) {
    if (age==null || age<=0 || isNaN(+age)) {
        console.log(`Invalid input: ${age}`);
    } else {
        if (age<18) {
            console.log(`Not eligible for vote:${age}`);
            
        } else if (age>=18 && age<=130) {
            console.log(`Eligible for vote:${age}`);
        }
        else{
            console.log(`Invalid input: ${age}`);
        }           
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);