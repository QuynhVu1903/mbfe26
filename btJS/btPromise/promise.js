function accept (age) {
    return new Promise((resolve, reject) => {
        if(age >= 18){
            resolve("Đồng ý");
        }
        else
            reject("Không đồng ý");
    });
}

accept(2)
    .then(ok => console.log(ok))
    .catch(err => console.log(err));