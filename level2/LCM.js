function solution(arr) {
    return arr.reduce((acc, cur) => acc * cur / gcd(acc, cur));
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

console.log(solution([2,6,8,14]));
console.log(solution([1,2,3]));
solution([2,6,8,14]) // 168
solution([1,2,3]) // 6
    