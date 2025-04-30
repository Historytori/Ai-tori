// prompts.js - 완성본

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
    text: '축구를 잘하는 방법을 설명해 줘'
  },
  '• 감마 실습': {
    type: 'text',
    text: '지금 업로드한 pdf로 ppt를 만들려고해,\npdf를 8페이지 분량으로 구조화해서 요약해 줘.\n출력시 문장의 어미는 ~임, ~함, ~증가, ~확대 등과 같이 간결하게 작성해 줘.'
  },
  '• 프롬프트 구성': {
    type: 'text',
    text: '넌 인하대 대학병원 외과 의사야! 나는 축구를 하다가 발목을 접질렀어. 발목이 부어있고 열감이 있어. 규칙적인 재활과 평소 운동습관을 개선해야 하는데, 너무 많은 정보들로 인해 어떻게 해야 할 지 모르겠어. 전문가 입장에서 재활을 어떻게 해야 하는지, 발목을 접지르지 않기 위해서 평소 운동을 어떻게 해야 하는지 표로 작성해줄래?'
  },
  '• 전략 수립': {
    type: 'text',
    text: '너는 프렌차이즈 컨설턴트야, 나는 인천광역시 중구 도원동 인천축구전용경기장 근처에 치킨집을 오픈하려고 해. 축구 경기 때문에 주말에 유동인구가 많고 주변에 아파트가 많아. 비즈니스 모델 캔버스를 활용해서 사업모델을 만들어 줄래? 그리고 AIDA 프레임워크를 활용해서 위 사업의 광고 문구를 제작해 줘.'
  },
  '• 그림 그리기1(이미지 생성)': {
    type: 'text',
    text: '다음 내용으로 이미지를 생성해 줘. 이미지: 인천축구전용경기장을 배경으로 바다가 보여, 경기장에는 인천유나이티드 축구팀을 의미하는 \"IUFC\"라는 간판이 달려있어, 바다에는 큰 배가 보이고 갈매기가 3마리가 날아가고 있어, 인천유나이티드의 유니폼을 입고 있는 한국의 남자 아이돌 1명, 여자 아이돌 1명이 환하게 웃으며 팬들을 환영하고 있어. 스타일: 리얼리스틱. 비율: 16:9.'
  },
  '• 그림 그리기2(웹툰 만들기)': {
    type: 'text',
    text: '축구 전술 중 하나인 \"게겐프레싱\"에 대해 간단하게 설명해줘. 위 내용으로 웹툰을 만들어서 축구팬들에게 알려주고 싶어. 게겐프레싱 전술 설명, 장점, 단점, 대표적인 구단 4가지 사항이 들어간 내용을 한국 스타일의 웹툰으로 그려줘.'
  },
  '• 그림 그리기3(포스터 만들기)': {
    type: 'text',
    text: '첨부한 사진은 영화<비상>의 포스터야. 2005년 K리그 플레이오프 준우승을 기록한 인천유나이티드의 이야기를 심층적으로 담은 다큐멘터리 영화이자 한국 최초의 스포츠 다큐멘터리야. 포스터의 해상도가 낮고 낡아서 새로운 이미지로 만들고 싶어. 팬들에게 친근하게 내용을 전달할 수 있도록 포스터로 만들어 줘. 밝은 색감에 일러스트를 포함해 줘.'
  },
  '• 그림 그리기4(이미지 합성하기)': {
    type: 'text',
    text: '첨부한 사진은 유명 축구선수 손흥민과 2025년 인천유나이티드 홈 유니폼이야. 이 두 이미지를 정확하게 관찰해서, 첨부한 인천유나이티드 홈 유니폼을 입고 있는 손흥민으로 합성해줘.'
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
    li.onclick = () => renderPrompt(label);
    document.querySelector(`#group-${currentGroup}`).appendChild(li);
  });
}

function renderPrompt(label) {
  const entry = promptMap[label];
  if (!entry) return;
  main.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'prompt-container';
  const card = document.createElement('div');
  card.className = 'prompt-card';
  const title = `<div class="prompt-title">${label}</div>`;
  if (entry.type === 'text') {
    card.innerHTML = `
      ${title}
      <div class="prompt-text">${entry.text}</div>
      <button class="copy-btn" onclick="copyPrompt(this)">복사하기</button>
    `;
  } else if (entry.type === 'links') {
    card.innerHTML = `
      ${title}
      <div class="link-list">
        ${entry.data.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('')}
      </div>
    `;
  } else if (entry.type === 'link') {
    card.innerHTML = `
      ${title}
      <a href="${entry.url}" class="copy-btn" download>다운로드</a>
    `;
  }
  container.appendChild(card);
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
