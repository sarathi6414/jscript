// // fizz
function num(){
    for(let i =1;i<=100;i++)
        if((i%3==0)&&(1%5==0))
        {
            console.log("FIZZBIZZ")
        }
        else if(i%3==0){
            console.log("FIZZ")
        }
        else if(i%5==0){
            console.log("BIZZ")
        }
        else{
            console.log(i);
        }
}
num();56

// //largest number
function largestNumber(arr){
      let largest=arr[0];
      for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
      }
      return largest;
}
const numbers = [3, 7, 2, 9, 5];
console.log(largestNumber(numbers));


// //celcius to fahrenheit

let celsius=prompt("celcius:")
let fahrenheit=celsius*1.8+32;
console.log(fahrenheit+"F");


// factorial number
function factorial(num){
    let  result = 1;
    for(let i=num;i>1;i--){
        result*=i;
    }
    return result;
}
console.log(factorial(5));



