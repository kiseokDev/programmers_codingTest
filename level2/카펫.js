function solution(brown, yellow) {
    const total = brown + yellow;
    const sqrt = Math.sqrt(total);

    for (let i = Math.floor(sqrt); i >= 1; i--) {
        if (total % i === 0) {
            const width = total / i;
            const height = i;

            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
}
