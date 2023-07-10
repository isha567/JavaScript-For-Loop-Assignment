//Challenge 1: Multiples of Three

for (let num = 1; num <= 30; num++) 
{ if ( num%3===0) {
    console.log("Fizz");
} else {
    
    console.log(num);;
}
    
}

//Challenge 2: Looping through Arrays and Modifying Elements

let numberList=[ 1,2,3,4,5,6,7,8,9,10]
let newNumberList = []

for (let i = 0; i < numberList.length; i++) {
    newNumberList.push (i*5);
    
}



console.log(newNumberList);


// let newNumberList= numberList.map ((i)=> {
//     return (i*5)
// })

// console.log(newNumberList);

// Challenge 3: Looping through String Arrays

let wordsArray= ["cat", "window", "bottle", "car"]


for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length>4) { console.log("Long word alert!");
        
    } else {
        console.log(wordsArray[i]);
    }
    
}

//Challenge 4: Updating TextContent of a Paragraph

let numArray= [1,2,3,4,5]
let para=  document.getElementById("myParagraph")
for (let i = 0; i < numArray.length; i++) {
  para.textContent= para.textContent + numArray[i]
    
}

// Challenge 5: Odd Numbers with For-Loops and Conditionals

for (let i = 1; i <=20; i++){
    if (i%2===1) {console.log(i+ " is an odd Number");
        
    } else {
        console.log(i+" is an even Number");
    }
   
}