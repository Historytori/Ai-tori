// prompts.js - 전체 프롬프트 포함 완성본

const promptMap = {
  '• 바로가기 링크': {
    type: 'links',
    data: [
      { text: 'ChatGPT', url: 'https://chatgpt.com/' },
      { text: 'Copilot', url: 'https://copilot.cloud.microsoft/' },
      { text: 'Gemini', url: 'https://gemini.google.com/' },
      { text: 'Grok', url: 'https://grok.com/' },
      { text: 'Felo', url: 'https://felo.ai/ko/' },
      { text: '뤼튼', url: 'https://wrtn.ai/' },
      { text: 'Ideogram', url: 'https://ideogram.ai/' },
      { text: 'GoogleFX', url: 'https://labs.google/fx/ko/' },
      { text: 'Bing Image Creator', url: 'https://www.bing.com/images/create' },
      { text: 'Lilys', url: 'https://lilys.ai/' },
      { text: 'Daglo', url: 'https://daglo.ai/' },
      { text: 'Youtube', url: 'https://www.youtube.com/' },
      { text: 'NapkinAI', url: 'https://www.napkin.ai/' },
      { text: 'Autodraw', url: 'https://www.autodraw.com/' },
      { text: 'GammaAI', url: 'https://gamma.app/ko/' },
      { text: 'HeyGen', url: 'https://www.heygen.com/' },
      { text: 'Suno', url: 'https://suno.com/home/' }
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
    text: '지금 업로드한 pdf로 ppt를 만들려고 해,\npdf를 8페이지 분량으로 구조화해서 요약해 줘.\n출력 시 문장의 어미는 ~임, ~함, ~증가, ~확대 등 간결하게 작성해 줘.'
  },
  '• 프롬프트 구성': {
    type: 'text',
    text: '넌 인하대 대학병원 외과 의사야! 나는 축구를 하다가 발목을 접질렀어. 발목이 부어있고 열감이 있어.\n규칙적인 재활과 평소 운동 습관을 개선해야 하는데, 너무 많은 정보들로 인해 어떻게 해야 할지 모르겠어.\n전문가 입장에서 재활을 어떻게 해야 하는지, 발목을 접지르지 않기 위해서 평소 운동을 어떻게 해야 하는지 표로 작성해줄래?'
  },
  '• 전략 수립': {
    type: 'text',
    text: '너는 프랜차이즈 컨설턴트야.\n나는 인천광역시 중구 도원동 인천축구전용경기장 근처에 치킨집을 오픈하려고 해.\n축구 경기 때문에 주말에 유동 인구가 많고 주변에 아파트도 많아.\n비즈니스 모델 캔버스를 활용해서 사업 모델을 만들어 줄래?\n그리고 AIDA 프레임워크를 활용해서 위 사업의 광고 문구도 만들어 줘.'
  },
  '• 그림 그리기1(이미지 생성)': {
    type: 'text',
    text: '인천축구전용경기장을 배경으로 바다가 보이고 경기장에는 IUFC 간판이 걸려있어.\n바다에는 큰 배가 보이고 두루미(학) 3마리가 날고 있어.\n인천유나이티드 유니폼을 입은 남자 아이돌 1명과 여자 아이돌 1명이 팬들에게 손을 흔들며 웃고 있어.\n스타일은 리얼리스틱이고 비율은 16:9야.'
  },
  '• 그림 그리기2(웹툰 만들기)': {
    type: 'text',
    text: '게겐프레싱 전술에 대해 간단히 설명해 줘.\n전술 개념, 장점, 단점, 대표 구단을 포함해서 축구 팬들에게 소개할 수 있는 한국 스타일의 웹툰으로 그려줘.'
  },
  '• 그림 그리기3(포스터 만들기)': {
    type: 'text',
    text: '2005년 인천유나이티드의 플레이오프 준우승 이야기를 다룬 영화 <비상> 포스터를 새롭게 만들고 싶어.\n기존 이미지가 오래되어서 팬들에게 친숙하고 밝은 색감의 일러스트가 포함된 포스터로 재구성해 줘.'
  },
  '• 그림 그리기4(이미지 합성하기)': {
    type: 'text',
    text: '손흥민 사진과 인천유나이티드 2025 홈 유니폼을 합성해서 손흥민이 그 유니폼을 입고 있는 이미지로 만들어줘.'
  },
  '• GPTs 활용 - 마인드맵 그리기': {
    type: 'text',
    text: '이번 주 일요일 16시 30분 인천유나이티드 vs 부산아이파크 경기 있어.\n1박 2일 부산 여행을 겸해 가려고 해. 필요한 준비물을 마인드맵 형태로 정리해 줘.'
  },
  '• GPTs 만들기 - 건배사 추천': {
    type: 'text',
    text: '인천유나이티드 행사 분위기에 어울리는 건배사를 추천해 줘.\n각 건배사는 의미 있는 단어의 앞글자를 따서 구성하고 각 줄은 40자 이상이야.\n예: 무고사, 마계인천 등. 마지막에는 "건배합시다!" 같은 마무리 멘트로 끝내줘.'
  },
  '• 굿즈 만들기': {
    type: 'text',
    text: '인천유나이티드의 굿즈를 디자인할 거야. 머플러, 핸드폰케이스, 키링, 응원봉, 텀블러 시안을 보여줘.\n또 흰색/검은색/파란색을 활용한 양말 세트도 제안해 줘. 숫자는 03(2003 창단 연도) 활용 가능해.'
  },
  '• 이모티콘 만들기': {
    type: 'text',
    text: '캐릭터 이미지로 16가지 감정 표현 이모티콘을 만들어 줘.\n각각의 표정, 행동, 포즈를 과장되게 표현하고 말풍선도 사용해 줘. MBTI별 감정표현도 포함해줘.'
  },
  '• 액션 피규어 만들기': {
    type: 'text',
    text: '무고사 선수를 액션 피규어로 제작할 거야. 축구공, 축구화, 응원 손, 미니 유니폼 등의 악세서리를 포함해 줘.\n파란 배경, 투명 PVC 패키지, 영어 인쇄, 비율 9:16 조건을 지켜줘.'
  },
  '• 자료조사와 요약': {
    type: 'text',
    text: '인천유나이티드의 미래에 대한 기사 10건을 조사하고 내용을 요약해 줘.\n키워드 추출, 마인드맵, 그리고 multilingual 기능으로 한국어 음원 스크립트로도 변환해줘.'
  },
  '• 응원가 만들기': {
    type: 'text',
    text: '인천유나이티드 응원가를 만들고 싶어.\nStyle: 1980s Italian disco, synth-pop revival, male voice, singalong melody, stadium echo FX, retro pads, analog bassline, clapping rhythm\n참고: Righeira - L’estate Sta Finendo\n키워드: 서해 바다, 파랑검정, 숭의, Allez인천, 석양, 파검의 용사. 이걸로 가사 만들어 줘.'
  },
  '• 테트리스 만들기': {
    type: 'text',
    text: 'HTML과 JavaScript로 웹에서 실행되는 테트리스 게임을 만들어 줘.\n방향키로 조작 가능하고, 다음 블록 표시, 점수 표시, 레벨 시스템 포함해 줘.\n스페이스바를 누르면 즉시 하강하도록 해 줘.'
  }
};

const sidebarLabels = Object.keys(promptMap);
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main-content');

function createSidebar() {
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
