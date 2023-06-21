function solution(n) {
    const binary = n.toString(2); // n을 2진수로 변환
    const count = binary.split('1').length - 1; // 2진수에서 1의 갯수 계산

    let nextNum = n + 1;
    while (true) {
        const nextBinary = nextNum.toString(2);
        const nextCount = nextBinary.split('1').length - 1;
        if (nextCount === count) {
            return nextNum;
        }
        nextNum++;
    }
}

const result = solution(35);