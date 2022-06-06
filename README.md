# 총 근무 시간 계산

## Usage

### 일 별 근무시간 입력

1일 1줄로 다음과 같은 형식으로 입력

```txt
MM/DD {요일} HH:mm HH:mm HH시간 mm분
```

날짜, 요일, 시작시간, 끝난시간, 직접 계산한 시간과 분을 bills.txt 파일로 입력

### 실행

```shell
node bills.js
```

실행 시 직접 계산한 결과와 다른 경우 3가지 에러 메시지를 출력함.

```txt
- 시간이 틀린 경우
  {계산된 시간} doesn't not equal {직접 입력한 시간} in HOUR.
- 분의 계산이 틀린 경우
  Minute isn't zero.
  {계산된 분} doesn't not equal {직접 입력한 분} in HOUR.
```

### 결과

계산 결과는 다음과 같은 형식으로 출력됨.

```txt
Total time: {총 시간}시간 {총 분}분
Total wage: ₩{총 금액}원
```

## 추후 업데이트

- 로직 변경 필요
- 로직 기반으로 웹 앱 제작 (VanillaJS)
  - 한 번에 입력 받고 입력 받은 내용으로 계산
