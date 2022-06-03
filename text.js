

/* function microvers(thirties){
    
    let respons = [] ;

    for(let i = 0; i < thirties.length; i++){
        let modular = thirties[i] % 5
        
        if((thirties[i] >= 38) && ((5 -  modular) < 3)){
            respons.push(thirties[i] + (5 - modular))
        }else{
            respons.push(thirties[i])
        }
    }
    return respons

}
console.log(microvers()) */


 function sockMerchant(n , arr){
    let sockPair = 0
    let arraySet = new Set(arr)
    if(n > 100 ){
        return 'too many sockes'
    }
    for (const element of arraySet) {

        let counter = arr.filter(el => el == element).length
        if(counter >= 2){
            let checkPair = Math.floor(counter / 2)
            sockPair += checkPair

        }
    }
    return sockPair
}
const arr = [10, 20 , 20, 10, 10, 10, 30, 50, 50, 60,60,20]
console.log(sockMerchant(9, arr)) 
/* function solveMeFirst(a, b){
    if((a <= 1 || a >= 1000) || (b <= 1 || b >= 1000)){
        return 'invalid input'
    }
    return a + b
}
console.log(solveMeFirst(200, 1)) */
/* 

75
67
40
33

*/


/* function gradingStudents(grades) {
    let modifiedGrades = []
   if((grades.length > 60 || grades.lengh == 1)){
       return 'invalid grades'
   }else{
       for (let index = 0; index < grades.length; index++) {
           const element = grades[index];
           if(element > 100 || element < 0){
               return 'invalid grades'
           }
           let toNextElement = 5 - (element % 5 )
            modifiedGrades[index] =  toNextElement < 3 ? element >= 38 ?  element + toNextElement : element : element
       }
   }
   return modifiedGrades

}
console.log(gradingStudents([73, 67, 38, 33,38,71,72,73,74,75,76,79,99])) */

/* function countingValleys(steps, path) {
    
    let sealavel = 0;
    let countValley = 0;
    const pattern = /[^UD]/;
    let outcome = pattern.test(path);

  if (steps <= 10**6 && steps >= 2  && !outcome) {
    for (let i = 0; i < path.length; i++) {
      sealavel = path[i] === "D" ? sealavel - 1 : sealavel + 1;
      if (sealavel === 0 && path[i] === "U") {
        countValley++;
      }
    }

    return countValley;
  } else {
    return "invalid input";
  }

}
console.log(countingValleys(8,'DDUUDDUUDDDD')) */