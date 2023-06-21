function fibonacci(n) {
    if (n <= 1) {
        return BigInt(n);
    }


    let prev = BigInt(0);
    let curr = BigInt(1);

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}
function solution(n) {
    const fib = fibonacci(n);
    const modulo = BigInt(1234567);
    return BigInt(fib % modulo);
}
console.log(solution(1234567));