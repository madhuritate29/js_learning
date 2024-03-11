console.log("----------- Step 1------------");
function show(){
    console.log("Hello Hii....");
}
show();

function move(){
    console.log("Welcome...");
}
move();

console.log("----------- Step 2------------");
function personalDetails(firstName,lastName,collageName){
    console.log("First Name: ",firstName);
    console.log("Last Name: ",lastName);
    console.log("Collage Name: ",collageName);
}
personalDetails("Madhuri ","Bhosale ","SKNSCOE");

console.log("----------- Step 3------------");
function swapValue(val1,val2){
   console.log("---Before Swap: ",val1,val2);
   
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("---After Swap: ",val1,val2);
  
}
swapValue("Virat","Anushka");
swapValue(1000,2000);

console.log("----------- Step 4------------");
function addThreeValues(v1,v2,v3){
    console.log("Arguments: ",v1,v2,v3);
    var result=v1+v2+v3;
    console.log("Addition is: ",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello ","Good ","Morning");