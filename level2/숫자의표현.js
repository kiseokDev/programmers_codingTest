function solution(n) {
    let count = 1;
    let start = 1;
    let sum = 0;
    let end = Math.ceil(n / 2); // 연속된 합의 최대 값

    while (start <= end && n != 1) {
        for (let i = start; sum < n; i++) {
            // console.log(`sum:${sum}`)
            sum += i;
            if (sum === n) {
                count++;
                break;
            } else if (sum > n) {
                break;
            }
        }
        sum = 0;
        start++;
    }

    return count;
}

for (let n = 1; n <= 20; n++) {
    console.log(solution(n))
}