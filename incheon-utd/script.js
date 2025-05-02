// script.js – 좌측 클릭 시 프롬프트 출력 및 복사 기능
function showCategory(categoryKey) {
  const container = document.getElementById('prompt-container');
  const image = document.getElementById('default-image');
  const prompts = promptsData[categoryKey];

  // 좌측 강조 초기화
  const listItems = document.querySelectorAll('.sidebar li');
  listItems.forEach(item => item.classList.remove('active'));

  // 클릭 항목 강조
  const clicked = Array.from(listItems).find(item => item.dataset.key === categoryKey);
  if (clicked) clicked.classList.add('active');

  // 프롬프트 출력 초기화
  container.innerHTML = '';

  if (!prompts || prompts.length === 0) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'prompt-box';
    emptyBox.innerHTML = `<pre class="prompt-text">프롬프트가 없습니다.</pre>`;
    container.appendChild(emptyBox);
  } else {
    prompts.forEach((text) => {
      const box = document.createElement('div');
      box.className = 'prompt-box';
      box.innerHTML = `
        <pre class="prompt-text">${text}</pre>
        <button class="copy-button" onclick="copyPrompt(\`${text.replace(/`/g, '\\`')}\`)">복사하기</button>
      `;
      container.appendChild(box);
    });
  }

  // 기본 이미지 숨기고 프롬프트 보여주기
  if (image) image.style.display = 'none';
  container.style.display = 'block';
}

function copyPrompt(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('프롬프트가 복사되었습니다!');
  }).catch(err => {
    alert('복사에 실패했습니다.');
    console.error(err);
  });
}
