// In số mỗi giây từ 5 đến 10
// dùng interval để in ra mỗi giây 
// dừng lại khi đến 10 => clearInterval
function countF(from, to) {
    let current = from;
    setInterval(() => {
        console.log(current);
        if(current === to){
            clearInterval(id);
        }
        current++;
    }, 1000);
} 
countF(5, 10);