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

display();
