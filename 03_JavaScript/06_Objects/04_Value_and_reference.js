let fridge = {
    coldrink : "1 L",
    snacks : "Chips"
}

// Reference (Shallow copy) : obj,arrays
let refrigderator = fridge;
refrigderator.coldrink = "0.5 L";
console.log(fridge);
console.log(refrigderator);

// Value Type (Deep Cloning) : Primitive
let money = 1000;
let copymoney = money;
copymoney = 2000;
console.log(money);
console.log(copymoney);