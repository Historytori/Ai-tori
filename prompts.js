// prompts.js - 완전 버전 (다중 프롬프트, 활성화 표시 포함)

const promptMap = {
  '• 바로가기 링크': {
    type: 'links',
    data: [
      { text: '1. ChatGPT(대화형AI)', url: 'https://chatgpt.com/' },
      { text: '2. Copilot(대화형AI)', url: 'https://copilot.cloud.microsoft/' },
      { text: '3. Gemini(대화형AI)', url: 'https://gemini.google.com/' },
      { text: '4. Grok(대화형AI)', url: 'https://grok.com/' },
      { text: '5. Felo(대화형AI)', url: 'https://felo.ai/ko/' },
      { text: '6. 뤼튼(대화형AI)', url: 'https://wrtn.ai/' },
      { text: '7. Ideogram(이미지AI)', url: 'https://ideogram.ai/' },
      { text: '8. GoogleFX(이미지AI)', url: 'https://labs.google/fx/ko/' },
      { text: '9. Bing Image Creator(이미지AI)', url: 'https://www.bing.com/images/create' },
      { text: '10. Lilys(요약형AI)', url: 'https://lilys.ai/' },
      { text: '11. Daglo(녹음요약AI)', url: 'https://daglo.ai/' },
      { text: '12. Youtube(영상소스)', url: 'https://www.youtube.com/' },
      { text: '13. NapkinAI(도식화AI)', url: 'https://www.napkin.ai/' },
      { text: '14. Autodraw(밑그림AI)', url: 'https://www.autodraw.com/' },
      { text: '15. GammaAI(발표자료AI)', url: 'https://gamma.app/ko/' },
      { text: '16. HeyGen(딥페이크AI)', url: 'https://www.heygen.com/' },
      { text: '17. Suno(음악AI)', url: 'https://suno.com/home/' }
    ]
  },
  '• 실습파일 다운로드': {
    type: 'link',
    url: 'https://example.com/실습파일.zip'
  },
  '• Napkin AI 실습': {
    type: 'text',
    texts: ['축구를 잘하는 방법을 설명해 줘']
  },
  '• 감마 실습': {
    type: 'text',
    texts: ['지금 업로드한 pdf로 ppt를 만들려고해,\npdf를 8페이지 분량으로 구조화해서 요약해 줘.\n출력시 문장의 어미는 ~임, ~함, ~증가, ~확대 등과 같이 간결하게 작성해 줘.']
  }
};

const sidebarLabels = Object.keys(promptMap);
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main-content');

function createSidebar() {
  sidebar.innerHTML = '';
  let currentGroup = '';
  sidebarLabels.forEach(label => {
    const groupMatch = label.match(/^•\s(.*?)\s/);
    const group = groupMatch ? groupMatch[1] : '기타';
    if (group !== currentGroup) {
      const h3 = document.createElement('h3');
      h3.textContent = group;
      sidebar.appendChild(h3);
      const ul = document.createElement('ul');
      ul.id = `group-${group}`;
      sidebar.appendChild(ul);
      currentGroup = group;
    }
    const li = document.createElement('li');
    li.textContent = label;
    li.onclick = () => {
      document.querySelectorAll('.sidebar li').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      renderPrompt(label);
    };
    document.querySelector(`#group-${currentGroup}`).appendChild(li);
  });
}

function renderPrompt(label) {
  const entry = promptMap[label];
  if (!entry) return;
  main.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'prompt-container';

  if (entry.type === 'text') {
    (entry.texts || []).forEach(text => {
      const card = document.createElement('div');
      card.className = 'prompt-card';
      card.innerHTML = `
        <div class="prompt-text">${text}</div>
        <button class="copy-btn" onclick="copyPrompt(this)">복사하기</button>
      `;
      container.appendChild(card);
    });
  } else if (entry.type === 'links') {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.innerHTML = `
      <div class="link-list">
        ${entry.data.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('')}
      </div>
    `;
    container.appendChild(card);
  } else if (entry.type === 'link') {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.innerHTML = `
      <a href="${entry.url}" class="copy-btn" download>다운로드</a>
    `;
    container.appendChild(card);
  }

  main.appendChild(container);
}

function copyPrompt(btn) {
  const text = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ 복사됨!';
    setTimeout(() => btn.textContent = '복사하기', 1500);
  });
}

createSidebar();
