// viết 1 function dùng reduce với tham số là 1 một mảng (input) và trả về 
let arr = [1, 3, 4, 1, 2, 5, 2];


function CountNumberAppear(arr) {

    if(!arr.length < 0) return
    let result = arr.reduce((acc, curr) => {
    acc["value " + curr] = (acc["value " + curr] ?? 0) + 1;
    return acc;
    }, {});
    return result;
    
}
console.log(CountNumberAppear(arr));



// for(let i = 0; i<arr.length;i++){
//     if(arr[i] % 2 === 0) continue

//     console.log(`arr[${i}] = ${arr[i]}`)
// }




