/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
function bmi(){
       let w = parsefloat(document.getByElementId("w").value);
       let h = parsefloat(document.getByElementId("h").value);
       let output = document.getByElementId("output");

       let msg = ""
       let src ="underweight.png"

       let bmi = 703 * (w / h **2);
       if(bmi < 18.5)
              msg = "Underweight";
       filename ="underweight.png"
       }else if(bmi >= 18.4 && <= 24.9){
              msg = "Heavy weight";
              filename ="overweight.png"
       }else if(bmi >=24.9 && <= 24.9){

       }

       output.innerHTMl ="Your BMI is $(bmi) <img src=$(filename)>"
}
}
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function input{
       let w = parsefloat(document.getByElementId("w").value);
       let h = parsefloat(document.getByElementId("h").value);
       let output = document.getByElementId("output");
}