const readline = require('readline');

// 표준 입력을 줄 단위로 읽기 위한 인터페이스
const rl = readline.createInterface({ input: process.stdin });
const lines = [];

// 한 줄씩 읽어서 배열에 저장
rl.on('line', (line) => {
    lines.push(line.trim());
});

rl.on('close', () => {
    const personCount = parseInt(lines[0]); // 사람 수
    const personList = [];

    // 각 사람의 몸무게(weight)와 키(height)를 배열에 저장
    for (let i = 1; i <= personCount; i++) {
        const [weight, height] = lines[i].split(' ').map(Number);
        personList.push({ weight, height });
    }

    const rankList = personList.map((person) => {
        // 현재 사람보다 몸무게와 키가 모두 큰 사람의 수를 셈
        const biggerPersonCount = personList.filter(
            (other) => other.weight > person.weight && other.height > person.height
        ).length;

        // 등수(자신보다 큰 사람 수+1) 리턴
        return biggerPersonCount+1; 
    });

    // 등수를 공백으로 구분하여 출력
    console.log(rankList.join(' '));
});