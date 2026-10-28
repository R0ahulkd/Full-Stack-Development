function getsum(n) {
    if(n > 1) {
        return (n + getsum(n-1));
    } else {
        return 1;
    }
}

console.log(getsum(5));