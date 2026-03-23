// let arr = [1, 3, 4, 1, 2, 5, 2];
let arr = [];
// console.log(result);

function CountNumberAppear(arr) {

    if(!arr.length < 0) return
    let result = arr.reduce((acc, curr) => {
    acc["value " + curr] = (acc["value " + curr] || 0) + 1;
    return acc;
    }, {});
    return result;
    
}
console.log(CountNumberAppear(arr));



// for(let i = 0; i<arr.length;i++){
//     if(arr[i] % 2 === 0) continue

//     console.log(`arr[${i}] = ${arr[i]}`)
// }




