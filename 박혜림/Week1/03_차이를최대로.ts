const readline = require('readline');

// 표준 입력을 줄 단위로 읽기 위한 인터페이스
const rl = readline.createInterface({ input: process.stdin });
const lines = [];

// 한 줄씩 읽어서 배열에 저장
rl.on('line', (line) => {
    lines.push(line.trim());
});

rl.on('close', () => {
    const elementCount = parseInt(lines[0]); // 배열 원소 개수
    const numList = lines[1].split(' ').map(Number); // 배열 원소 목록

    // 지금까지 나온 가장 큰 합 저장
    let maxDiff = 0;

    // 숫자들을 나열할 수 있는 모든 순서를 구함
    const permutationList = getPermutations(numList);

    // 모든 순서를 하나씩 꺼내서 합산
    for (let i = 0; i < permutationList.length; i++) {
        const permutation = permutationList[i]; // 하나의 순서
        let diffSum = 0;

        // 이웃한 두 숫자의 차이를 모두 더함
        for (let j = 0; j < elementCount - 1; j++) {
            const currentDiff = Math.abs(permutation[j] - permutation[j + 1]); // 이웃한 두 숫자의 절댓값 차이
            diffSum += currentDiff;
        }

        // 더 큰 합이 나오면 최댓값 갱신
        if (diffSum > maxDiff) maxDiff = diffSum;
    }

    console.log(maxDiff); // 최댓값 출력
});

// 배열의 모든 순서 경우의 수를 구하는 함수
function getPermutations(arr) {
    if (arr.length <= 1) return [arr]; // 원소가 1개면 그게 전부

    const resultList = [];

    // arr의 각 원소를 맨 앞에 놓고, 나머지 원소들의 순열을 재귀로 구함
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]; // 맨 앞에 놓을 숫자
        const remainList = arr.slice(0, i).concat(arr.slice(i + 1)); // 나머지 숫자들
        const childPermList = getPermutations(remainList); // 나머지 숫자들의 모든 순서

        // 맨 앞 숫자 + 나머지 순서를 합쳐서 결과에 추가
        for (let j = 0; j < childPermList.length; j++) {
            resultList.push([current].concat(childPermList[j]));
        }
    }

    return resultList;
}