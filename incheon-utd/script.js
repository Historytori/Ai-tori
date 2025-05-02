// script.js – 링크/다운로드/다중 프롬프트 항목 반영
function showCategory(categoryKey) {
  const container = document.getElementById('prompt-container');
  const image = document.getElementById('default-image');
  const prompts = promptsData[categoryKey];

  // 좌측 카테고리 강조 초기화
  const listItems = document.querySelectorAll('.sidebar li');
  listItems.forEach(item => item.classList.remove('active'));

  // 클릭한 항목 강조
  const clicked = Array.from(listItems).find(item => item.dataset.key === categoryKey);
  if (clicked) clicked.classList.add('active');

  // 출력 초기화
  container.innerHTML = '';

  if (!prompts || prompts.length === 0) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'prompt-box';
    emptyBox.innerHTML = `<pre class="prompt-text">프롬프트가 없습니다.</pre>`;
    container.appendChild(emptyBox);
  } else if (categoryKey === 'link') {
    // 바로가기 링크 전용 렌더링
    const box = document.createElement('div');
    box.className = 'prompt-box';
    const linked = prompts[0].replace(/(https?:\/\/[\w./?=&#%-]+)/g, '<a href="$1" target="_blank">$1</a>');
    box.innerHTML = `<div class="prompt-text link-text">${linked}</div>`;
    container.appendChild(box);
  } else if (categoryKey === 'download') {
    // 다운로드 전용 렌더링
    const box = document.createElement('div');
    box.className = 'prompt-box';
    box.innerHTML = `<div class="prompt-text link-text">
      <a href="https://github.com/your-username/your-repo/raw/main/인천UTD_실습파일.zip" download>인천UTD 실습파일</a>
    </div>`;
    container.appendChild(box);
  } else {
    // 일반 프롬프트 출력
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

  image.style.display = 'none';
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
