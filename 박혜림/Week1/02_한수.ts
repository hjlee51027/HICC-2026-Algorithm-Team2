const readline = require('readline');

// 표준 입력을 줄 단위로 읽기 위한 인터페이스
const rl = readline.createInterface({ input: process.stdin });

// 한수: 각 자리 숫자의 차이(공차)가 일정한 수
// 123 -> 1, 2, 3 -> 숫자 차이가 모두 1 -> 한수
// 135 -> 1, 3, 5 -> 숫자 차이가 모두 2 -> 한수
// 124 -> 1, 2, 4 -> 숫자 차이가 1, 2로 다름 -> 한수 아님

rl.on('line', (line) => {
    const inputNumber = parseInt(line.trim()); // 입력받은 숫자
    let hansuCount = 0; // 한수 개수

    // 1부터 n까지 숫자를 하나씩 확인
    for (let num = 1; num <= inputNumber; num++) {
        // 해당 숫자가 한수이면 hansuCount를 1 증가
        if (isHansu(num)) hansuCount++;
    }

    console.log(hansuCount); // 한수 개수 출력
    rl.close();
});

// 숫자를 받아서 한수인지 아닌지 true/false로 반환하는 함수
function isHansu(num) {
    // 숫자를 자리별로 쪼개서 배열로 만듦 ex) 123 -> [1, 2, 3]
    const numList = String(num).split('').map(Number);

    // 한 자리 또는 두 자리 수는 무조건 한수
    // 1자리 수(1~9): 자리가 하나뿐이라 비교할 게 없으므로 무조건 한수
    // 2자리 수(10~99): 두 자리 사이의 차이가 하나뿐이라 항상 등차수열 성립 -> 무조건 한수
    if (numList.length < 3) return true;

    // 첫 번째 자리와 두 번째 자리의 차이 (공차)
    const diff = numList[1] - numList[0];

    // 두 번째 자리부터 끝까지 이웃한 두 숫자의 차이가 공차와 같은지 확인
    for (let i = 1; i < numList.length - 1; i++) {
        const currentDiff = numList[i + 1] - numList[i]; // 현재 이웃한 두 숫자의 차이

        // 공차가 다르면 한수 아님
        if (currentDiff !== diff) return false;
    }

    return true; // 모든 차이가 같으면 한수
}