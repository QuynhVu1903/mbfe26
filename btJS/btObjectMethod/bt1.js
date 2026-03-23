// Tạo object person có method fullName trả về họ + tên. 
// Viết method tăng tuổi tự động (year++).

// function fullName() {
//     console.log(this.ho + " " + this.ten);
// }
let person = {
    ho: "Nguyen",
    ten: "A",
    year: 20,
    fullName () {
        console.log(this.ho + " " + this.ten);
    },
    growUp () {
        // this.year++; year++ là tăng sau nên phải thêm dòng lệnh
        // console.log(this.year);
        //còn nếu muốn tăng trước rồi mới in ra
        console.log(++this.year);
    }

}
person.fullName();
person.growUp();

// Thử gán method sang object khác và xem this thay đổi thế nào.
let admin = {
    ho: "Nguyen",
    ten: "B",
    year: 33,
    fullName () {
        console.log(this.ho + " " + this.ten);
    },
    growUp () {

        console.log(++this.year);

    }

} 
admin.fullName();
admin.growUp();
