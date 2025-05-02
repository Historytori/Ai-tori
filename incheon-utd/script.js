function showCategory(categoryKey) {
  const container = document.getElementById('prompt-container');
  const image = document.getElementById('default-image');
  const prompts = promptsData[categoryKey];

  const listItems = document.querySelectorAll('.sidebar li');
  listItems.forEach(item => item.classList.remove('active'));
  const clicked = Array.from(listItems).find(item =>
    item.getAttribute('onclick')?.includes(categoryKey)
  );
  if (clicked) clicked.classList.add('active');

  container.innerHTML = '';
  if (!prompts || prompts.length === 0) {
    container.innerHTML = '<div class="prompt-box"><div class="prompt-text">프롬프트가 없습니다.</div></div>';
    return;
  }

  prompts.forEach((text) => {
    const box = document.createElement('div');
    box.className = 'prompt-box';
    box.innerHTML = `
      <div class="prompt-text">${text}</div>
      <button class="copy-button" onclick="copyPrompt(\`${text.replace(/`/g, '\\`')}\`)">복사하기</button>
    `;
    container.appendChild(box);
  });

  image.style.display = 'none';
  container.style.display = 'block';
}

function copyPrompt(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("프롬프트가 복사되었습니다!");
  }).catch(() => {
    alert("복사 실패. 브라우저 설정을 확인하세요.");
  });
}
