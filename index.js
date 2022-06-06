// FIXME: 하드코딩된 요소들 변경 필요 (Element, innerHTML)

function display() {
  const container = document.getElementById("container");

  container.innerHTML = `
    <h1 class="title">근무 시간 입력하기</h1>
    <article id="content" class="content">
      <textarea
        class="textarea"
        id="times"
        placeholder="예시) 6/7 화 11:00 18:00"
        ></textarea>
      <button class="button" onclick="calculate()">총 근무 시간 확인</button>
    </article>
    <div class="result" id="result"></div>
  `;
}

function createButton() {
  return '<button class="button" onclick="display()">다시 입력하기</button>';
}

function getTable(listOfTr) {
  return `
    <div class="table">
      <div class="table__head">
        <div class="table__items">날짜</div>
        <div class="table__items">요일</div>
        <div class="table__items">출근 시간</div>
        <div class="table__items">퇴근 시간</div>
        <div class="table__items">시간</div>
      </div>
      ${listOfTr}
    </div>
  `;
}

display();
