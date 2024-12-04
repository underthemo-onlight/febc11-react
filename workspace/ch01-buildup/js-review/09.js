function sayHello(strings, ...values) {
    console.log(strings);
    console.log(values);

    let result = strings[0];
    for (let i = 0; i < values.length; i++) {
        result += `<strong>${values[i]}</strong>`;
        result += `${strings[i + 1]}`;
    }

    return result;
}

// sayHello(평문 문자 배열, 강조 문자 배열)

const result = sayHello(['안녕하세요. ', '님. 오늘 날씨는 ', ' 입니다.'], '무지', '맑음');
console.log(result); // 안녕하세요. <strong>무지</strong>님. 오늘 날씨는 <strong>맑음</strong> 입니다.

const result2 = sayHello(['안녕하세요. ', '님. 오늘 날씨는 ', ' 입니다. 즐거운', '보내세요.'], '데이지', '흐림', '하루');
console.log(result2); // 안녕하세요. <strong>데이지</strong>님. 오늘 날씨는 <strong>흐림</strong> 입니다. 즐거운 <strong>하루</strong> 보내세요.

const username = '무지'
const weather = '맑음'
const str = `안녕하세요. ${username}님. 오늘 날씨는 ${weather}입니다.`

const result3 = sayHello(['안녕하세요. ', '님. 오늘 날씨는 ', ' 입니다.'], username, weather);

// 태그드 템플릿 리터럴(Tagged Template Literal): 텍스트와 변수 배열로 나눠진다. 
const result4 = sayHello`안녕하세요. ${username}님. 오늘 날씨는 ${weather}입니다.`
console.log('result4', result4)
