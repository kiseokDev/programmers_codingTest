//탐욕법Greedy
function solution2(people, limit) {
    people.sort((a, b) => b - a);

    let count = 0;
    while (people.length > 0) {
        count++;
        const element = people.pop();
        let min = limit - (element + people[people.length - 1]);
        if (min < 0) {
            count += people.length;
            break;
        };
        let index = people.length - 1;
        for (let i = people.length - 2; i >= 0; i--) {
            if (limit - (element + people[i]) < min && limit - (element + people[i]) >= 0) {
                min = limit - (element + people[i]);
                index = i;
            }
        }
        if (min >= 0) {
            people.splice(index, 1);
        }


    }
    return count;
}
// console.log(solution([80, 60,50,40,50], 100))
console.log(solution([70, 50, 80, 50], 100))
//1. 내림차순 정렬 후 팝
//2. 맨뒤 -1 부터 팝한거랑 더해서 100애서 뺸값중 최솟값 이 양수라면? 배열에서 빼고 count ++ 
//3. 아니면 그냥 count ++


function solution(people, limit) {
    people.sort(function (a, b) { return a - b });
    for (var i = 0, j = people.length - 1; i < j; j--) {
        if (people[i] + people[j] <= limit) i++;
    }
    return people.length - i;
}