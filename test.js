// function factor(n) {
//     const factors = [

//     ];

//     while (n % 2 === 0) {
//         factors.push(2);
//         n /= 2;
//     }

//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         while (n % i === 0) {
//             factors.push(i);
//             n /= i;
//         }
//     }

//     if (n > 2) {
//         factors.push(n);
//     }
//     console.log(factors)
//     return factorFormatter(factors);
// }

// function factorFormatter(factors) {
//     let product = 1;
//     const result = [];

//     for (let i = 0; i < factors.length - 1; i++) {
//         product *= factors[i];
//     }

//     result.push(product);
//     result.push(factors[factors.length - 1]);

//     return result.sort((a, b) => a - b);

// }
// // [1, 7, 14, 28, 12, 25, 24].forEach(e => console.log(`${e}:`, factor(e)));
// [24].forEach(e => console.log(`${e}:`, factor(e)));