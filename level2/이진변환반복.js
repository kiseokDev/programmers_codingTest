function solution(s) {
    let result = [0, 0]
    let string = s;
    while (string !== '1') {
        result[0]++;
        string = Array.from(string).reduce((acc, element) => {
            if (element === '1') {
                return acc + element;
            } else {
                result[1]++;
                return acc;
            }
        }, '').length.toString(2);
    }
    return result;
}
const s = '110010101001';
const result = solution(s)
console.log(result);

