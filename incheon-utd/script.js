function showCategory(categoryKey) {
  const container = document.getElementById('prompt-container');
  const image = document.getElementById('default-image');
  const prompts = promptsData[categoryKey];
  
  // 좌측 카테고리 강조 초기화
  const listItems = document.querySelectorAll('.sidebar li');
  listItems.forEach(item => item.classList.remove('active'));
  
  // 현재 클릭한 항목 강조
  const clicked = Array.from(listItems).find(item => item.textContent.includes(categoryKey));
  if (clicked) clicked.classList.add('active');

  // 프롬프트 출력
  container.innerHTML = '';
  prompts.forEach((text, index) => {
    const box = document.createElement('div');
    box.className = 'prompt-box';
    box.innerHTML = `
      <div class="prompt-text">${text}</div>
      <button class="copy-button" onclick="copyPrompt(\`${text.replace(/`/g, '\`')}\`)">복사하기</button>
    `;
    container.appendChild(box);
  });

  image.style.display = 'none';
  container.style.display = 'block';
}

function copyPrompt(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("프롬프트가 복사되었습니다!");
  });
}
