// for (let i = 1; i <= 3; i++) {
//     console.log("Parent Loop", i);
//     for (j = 1; j <= 3; j++){
//         if (j == 2) {
//             break;
//         }
//         console.log("child Loop", j);
//     }
// }

for (let i = 1; i < 10; i++) {
    if (i == 2 || i == 5) {
        continue;
    } else {
        console.log(i);
    }
}