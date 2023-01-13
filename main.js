function solution(s) {
    const stack = [];
    const queue = [...s];
    if (arr[0] === ")") return false;
    for (let i = 0; i < queue.length; i++) {
        const queueLetter = queue.shift();
        const stackLetter = stack[stack.length - 1];
        if (!queueLetter) return true;
        if (!stack.length && stackLetter === ")") {
            stack.push(queueLetter);
            break;
        } else if (!stack.length) {
            stack.push(queueLetter);
            continue;
        }
        stackLetter === queueLetter ? stack.push(queueLetter) : stack.pop();
    }
    return stack.length === 0 ? true : false;
}

console.log(solution("()()"));