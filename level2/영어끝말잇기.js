function solution(n, words) {
    let usedWords = new Set(); // 사용된 단어를 저장하는 Set

    let prevWord = words[0]; // 이전 단어 초기화
    usedWords.add(prevWord); // 이전 단어를 사용된 단어로 추가

    for (let i = 1; i < words.length; i++) {
        let currWord = words[i]; // 현재 단어

        // 끝말잇기 규칙에 맞지 않는 경우
        if (currWord[0] !== prevWord[prevWord.length - 1] || usedWords.has(currWord)) {
            return [(i % n) + 1, Math.ceil((i + 1) / n)];
        }

        usedWords.add(currWord); // 현재 단어를 사용된 단어로 추가
        prevWord = currWord; // 이전 단어 갱신
    }

    return [0, 0]; // 끝말잇기를 모두 성공한 경우
}

// 예시 입력
const n = 3;
const words = ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'];

// 함수 호출 및 결과 출력
console.log(solution(n, words));
