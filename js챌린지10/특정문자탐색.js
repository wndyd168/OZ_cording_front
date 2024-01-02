/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 * - 결과값을 return 하세요.
 * - 추가적인 test가 필요한 경우에는 기존 test 코드 밑에 추가해주세요.
 * - 코드 실행 시 모든 테스트가 true인 경우 통과입니다!
 */

/* 문제 출제
 *
 * - 당신은 탐험가로, 잊혀진 섬에 있는 보물을 찾아 모험을 떠납니다.
 * - 보물은 숨겨진 곳에 있으며, 특정 문자를 가진 보물을 찾을 때마다 보물의 흔적이 나타납니다.
 * - 보물은 총 몇개인지 문자열에서 특정 문자의 개수를 세어 확인해보세요!
 *
 *
 *
 *
 */

function question(a, n) {
  // 퀘스천이라는 함수에 a랑 n이라는 매개변수생성
  let result = 0;
  // 리절트라는 변수에 0을 입력

    for (let i = 0; i < a.length; i++) {
      // i는 0 , i의 값이 a의 글자수 보다 작으면 ; i +1 
        if (a[i] === n) {
          // a의 i번째 값이 n과 같으면
            result++;
            // 리절트 변수에 +1
        }
    }

  return result;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
  question,
  [
      [['h', 'a', 'p', 'p', 'y'], 'p'],
      [['h', 'e', 'l', 'l', 'o'], 'o'],
      [['c', 'h', 'r', 'i', 's', 't', 'm', 'a', 's'], 'a'],
      [['네', '잎', '클', '로', '버', '로', '버', '오', '버'], '버'],
  ],
  [2, 1, 1, 3]
);

function Test(question, conditions, results) {
  for (let index in results) {
      const result = Array.isArray(results[index])
          ? JSON.stringify([question(...conditions[index])]) === JSON.stringify(results[index])
          : question(...conditions[index]) === results[index];
      console.log(`테스트 ${+index + 1}`, result);
      if (!result) {
          console.log('테스트에 통과하지 못했습니다.');
          return;
      }
  }

  console.log('테스트에 통과하셨습니다!');
}