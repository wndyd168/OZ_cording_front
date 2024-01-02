/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 * - 결과값을 return 하세요.
 * - 추가적인 test가 필요한 경우에는 기존 test 코드 밑에 추가해주세요.
 * - 코드 실행 시 모든 테스트가 true인 경우 통과입니다!
 */

/*  문제 출제
 *
 * - 우리는 숫자를 좋아하지만 홀수는 별로 좋아하지 않습니다.
 * - 그래서 우리는 주어진 숫자에서 홀수를 모두 빼고 남은 숫자들만 배열에 담아줍니다.
 *
 *❗️ 제한 조건 ❗️
 * - n은 자연수 입니다.
 *
 *
 * # 예시
 *- n이 5인 경우 결과 값 [2,4]
 */

 function question(n) {
  
  let result=[];
  // result라는 변수에 배열을 저장
  for(let a = 0; a<=n; a++){
    // a는 0 이다, a가 n보다 작거나 같으면, a에서 1을 더함 반복 
    if(a%2===0){
      // 만약 a를 2로 나눈값이 0 이면
      result.push(a);
      //a의 값을 담아낸다
    }
  }

  return result;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
  question,
  [[10], [3], [8], [6], [9]],
  [
      [0, 2, 4, 6, 8, 10],
      [0, 2],
      [0, 2, 4, 6, 8],
      [0, 2, 4, 6],
      [0, 2, 4, 6, 8],
  ]
);

function Test(question, conditions, results) {
  for (let index in results) {
      const result = Array.isArray(results[index])
          ? JSON.stringify(question(...conditions[index])) === JSON.stringify(results[index])
          : question(...conditions[index]) === results[index];
      console.log(`테스트 ${+index + 1}`, result);
      if (!result) {
          console.log('테스트에 통과하지 못했습니다.');
          return;
      }
  }

  console.log('테스트에 통과하셨습니다!');
}