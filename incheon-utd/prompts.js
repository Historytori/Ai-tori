// prompts.js – 프롬프트 다중 항목 포함 전체 반영
const promptsData = {
  link: [`1. ChatGPT(대화형AI) https://chatgpt.com/
2. Copilot(대화형AI) https://copilot.cloud.microsoft/
3. Gemini(대화형AI) https://gemini.google.com/
4. Grok(대화형AI) https://grok.com/
5. Felo(대화형AI) https://felo.ai/ko/
6. 뤼튼(대화형AI) https://wrtn.ai/
7. Ideogram(이미지AI) https://ideogram.ai/
8. GoogleFX(이미지AI) https://labs.google/fx/ko/
9. Bing Image Creator(이미지AI) https://www.bing.com/images/create
10. Lilys(요약형AI) https://lilys.ai/
11. Daglo(녹음요약AI) https://daglo.ai/
12. Youtube(영상소스) https://www.youtube.com/
13. NapkinAI(도식화AI) https://www.napkin.ai/
14. Autodraw(밑그림AI) https://www.autodraw.com/
15. GammaAI(발표자료AI) https://gamma.app/ko/
16. HeyGen(딥페이크AI) https://www.heygen.com/
17. Suno(음악AI) https://suno.com/home/`],

  download: [`실습파일 다운로드(github에 ‘실습파일 다운로드’라는 이름의 Zip 파일 첨부해두었음)`],

  napkin: [`축구를 잘하는 방법을 설명해 줘.`],

  gamma: [`지금 업로드한 pdf로 ppt를 만들려고해,\npdf를 8페이지 분량으로 구조화해서 요약해 줘.\n출력시 문장의 어미는 '~임, ~함, ~증가, ~확대' 등과 같이 간결하게 작성해 줘.`],

  prompt: [`넌 인하대 대학병원 외과 의사야!\n나는 축구를 하다가 발목을 접질렀어...`],

  strategy: [`너는 프렌차이즈 컨설턴트야...`],

  draw1: [
    `인천축구전용경기장을 배경으로 바다가 보이고...`,
    `해당 이미지를 두루미(학)로 바꾸어 생성해 줘.`
  ],

  draw2: [
    `게겐프레싱 전술 설명해줘.`,
    `이걸 웹툰 형식으로 구성해줘. 내용: 핵심 개념, 장점, 단점, 활용 구단 포함.`
  ],

  draw3: [`2005년 K리그 준우승 다큐 <비상> 포스터 리디자인 요청.`],

  draw4: [`손흥민과 2025 인천유나이티드 유니폼 합성 이미지 제작.`],

  mindmap: [`인천유나이티드 vs 부산아이파크 원정 관람 1박2일 여행 마인드맵 만들어줘.`],

  acrostic: [
    `GPT 기반 삼행시봇 역할로 행사 성격·참석자 유형에 따라 삼행시 생성.`,
    `삼행시 5개 생성. 각 줄은 40자 이상, 감동과 유머 조화.`,
    `의미 있는 3~4글자 키워드로 삼행시 생성 요청.`,
    `사행시, 오행시 등도 글자 수에 맞게 생성해야 함.`,
    `출력 예시 포함. 응답이 다국어로 가능해야 함.`
  ],

  goods: [
    `인천유나이티드 굿즈 디자인 아이디어 회의`,
    `양말 디자인에 '03'을 활용하고 팬 감성 고려하기.`
  ],

  emoji: [
    `이모티콘 캐릭터 설정: 밝은 남성 팬`,
    `기본 감정 표현 16가지`,
    `액션 동작: 응원, 박수, 좌절 등`,
    `MBTI 16유형별 대표 액션`,
    `표 형식으로 정리된 리스트 필요`,
    `배경 없는 PNG로 구성 요청`
  ],

  figure: [`무고사 캐릭터 기반 액션 피규어 세트 기획서 요청.`],

  summary: [
    `10건 기사 수집 후 주요 내용 요약`,
    `공통 키워드 도출`,
    `내용 기반 마인드맵 구조화`,
    `제목 설정 후 multilingual 음원 생성 요청`
  ],

  cheer: [
    `인천 응원가 작곡 스타일 설명`,
    `Suno 프롬프트에 기반한 예시 포함`,
    `인천 관련 키워드로 가사 생성 요청`
  ],

  tetris: [`웹에서 구동되는 테트리스 게임을 만들어줘... (전체 조건 포함)`]
};
