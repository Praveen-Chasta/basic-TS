
// type inference => both function types are given so type script understands that what the function returns

// function sum(a: number, b:number): number{          so we dont need to write :number after that function
//     return a + b;
// }

// const c = sum(1 , 5);

// console.log(c)


// function sum(a: number, b:number){
//     return a + b;
// }

// const c = sum(1 , 5);

// console.log(c)


function functionOne(fn: () => void){
    console.log("HOF")
}

functionOne(function(){
    console.log("callback")
})