//스택
function solution(string) {
    const stack = [];

    for (let char of string) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0 ? 1 : 0;
}