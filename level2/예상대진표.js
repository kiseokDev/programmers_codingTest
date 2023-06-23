function solution(N, A, B) {
    let round = 1;

    while (Math.abs(A - B) !== 1 || Math.max(A, B) % 2 !== 0) {
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);
        round++;
    }

    return round;
}

console.log(Math.abs(4 - 5) !== 1 ? true : false, Math.max(4, 5) % 2 !== 0)
//2 인이유 ? 