let myArr = [180, 183, 170, 156, 192, 185];
let talleststudent = myArr.reduce((T = 0,i) => {
    if(i > T) {
        T = i;
    }
    return T;
});

console.log(talleststudent);