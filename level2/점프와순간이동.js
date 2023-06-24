function solution(N) {
    let count = 0;

    while (N > 0) {
        if (N % 2 === 0) {
            N = N / 2; // 짝수일 경우 순간이동
        } else {
            N = N - 1; // 홀수일 경우 한 칸 점프
            count++;
        }
    }

    return count;
}


console.log(solution(5))