/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 * - 결과값을 return 하세요.
 * - 추가적인 test가 필요한 경우에는 기존 test 코드 밑에 추가해주세요.
 * - 코드 실행 시 모든 테스트가 true인 경우 통과입니다!
 */

/*  문제 출제
 *
 * - 두 학생이 서로의 나이를 입력하면, 두 학생이 동갑인지 아닌지를 판별하는 프로그램을 작성해보세요.
 * - 만약 두 학생이 동갑이라면 "너 내 동료가 돼라!"라고 출력하고, 동갑이 아니라면 "너 내 도도도도독..."라고 return 하세요.
 *
 *
 * ❗️ 제한 조건 ❗️
 * - 나이는 1 이상 100 이하의 자연수로만 입력됩니다.
 *
 */

function question(age1, age2) {
    // 여기에서 코드 작성해주세요!
    let result;
    let a= age1;
    let b= age2;
    
    if(a==b){
        result='너 내 동료가 돼라!'
    }
    else{
        result='너 내 도도도도독...'
    }

    
    return result;

}
// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
    question,
    [
        [13, 13],
        [14, 17],
        [32, 32],
        [24, 24],
        [19, 17],
        [20, 21],
    ],
    [
        '너 내 동료가 돼라!',
        '너 내 도도도도독...',
        '너 내 동료가 돼라!',
        '너 내 동료가 돼라!',
        '너 내 도도도도독...',
        '너 내 도도도도독...',
    ]
);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = question(...conditions[index]) === results[index];
        console.log(`테스트 ${+index + 1}`, result);
        if (!result) {
            console.log('테스트에 통과하지 못했습니다.');
            return;
        }
    }

    console.log('테스트에 통과하셨습니다!');
}