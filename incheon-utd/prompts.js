const promptsData = {
  link: [
    `1. ChatGPT(대화형AI) https://chatgpt.com/
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
17. Suno(음악AI) https://suno.com/home/`
  ],
  download: [
    `실습파일 다운로드(github에 ‘실습파일 다운로드’라는 이름의 Zip 파일 첨부해두었음)`
  ],
  napkin: [`축구를 잘하는 방법을 설명해 줘.`],
  gamma: [`지금 업로드한 pdf로 ppt를 만들려고해, pdf를 8페이지 분량으로 구조화해서 요약해 줘. 출력시 문장의 어미는 '~임, ~함, ~증가, ~확대' 등과 같이 간결하게 작성해 줘.`],
  prompt: [`넌 인하대 대학병원 외과 의사야!...`],
  strategy: [`너는 프렌차이즈 컨설턴트야....`],
  draw1: [`다음 내용으로 이미지를 생성해 줘....`],
  draw2: [`축구 전술 중 하나인 '게겐프레싱'에 대해...`],
  draw3: [`첨부한 사진은 영화 <비상>의 포스터야....`],
  draw4: [`첨부한 사진은 유명 축구선수 손흥민과...`],
  mindmap: [`이번 주 일요일 16시 30분에...`],
  acrostic: [`인천유나이티드 삼행시 추천봇...`],

  goods: [
    `인천유나이티드 구단의 올 시즌 새로운 굿즈를 디자인할 거야.
위에 공식 앰블럼을 활용해서 머플러, 핸드폰케이스, 키링, 응원봉, 텀블러 굿즈 상품을 만드려고 해. 디자인 시안 보여줘.
이번에는 양말 세트를 만들고자해.
흰색, 검은색, 파란색을 기반으로 세 양말 세트 디자인 시안 보여줘. 깔끔하고 사람들이 좋아할만한 디자인으로 부탁해. 다른 축구 구단의 굿즈들을 참고해도 좋아.
숫자가 들어가야 한다면 창단 연도인 2003년을 활용해서 '03'으로 부탁해.`
  ],

  emoji: [
    `너는 세계 최고의 일러스트야. 첨부한 사진의 인물을 잘 분석해서 이모티콘용 캐릭터 이미지를 생성해줘. 배경은 흰색이고, 캐릭터는 2025년 인천유나이티드의 홈 유니폼을 입고 있어.
이 캐릭터를 다양한 전면, 뒷면, 옆면, 로우앵글, 하이앵글 등 각도로 만들어줘
사람의 기본 감정상태 16가지를 표로 작성해줘. 번호, 감정, 표정, 행동, 포즈, 제스쳐 순으로
위에 만든 캐릭터를 이용해 표를 참고해서 16가지 감정 상태를 담은 이모티콘을 만들어줘. 캐릭터 표정, 행동, 포즈를 크고 눈에 띄게 과장된 만화같은 효과로 표현해줘. 의성어, 의태어가 필요하면 삽입해도 돼. 다양한 도구가 필요하면 삽입해도 돼. 텍스트는 기본적으로 말풍선 안에 있어야 하지만 빈 곳에 표시해도 돼.
MBTI 16가지 유형을 표로 작성해줘. 번호, 감정, 감정설명, 표정/행동/포즈/제스쳐 순으로.
이 캐릭터로 MBTI별 감정, 표정/행동을 표현한 액션시트 이모티콘 만들어줘.
지금까지 나눈 대화의 모든 맥락을 유지한 채로.`
  ],

  figure: [
    `첨부한 사진은 인천유나이티드의 축구선수 '무고사'야.
무고사가 사용할 4~5개의 액세서리(축구공, 축구화 등)와 함께 그 캐릭터의 액션 피규어 세트를 실제 제품 목업스타일로 만들어줘.
추가로 아래의 조건을 준수해줘.
1. 캐릭터와 악세서리들이 전부 패키지화된 상품
2. 상품은 액션피규어 세트와 바탕종이와 투명PVC케이스로 구성.
3. 바탕 종이는 파란색이야. 종이 위에 액션피규어를 잘 배치하고 투명PVC는 커버로 하고, 바탕종이에는 적당히 상품명, 관련된 내용을 인쇄.
4. 판매 가능한 수준으로 리얼하고 완성도가 높아야하며 인쇄 사양도 실 제품 같아야 하고 오타가 없어야 함.
5. 인쇄는 영어를 기본으로.
6. 가로세로의 비율은 9:16`
  ],

  summary: [
    `인천유나이티드 전망에 관한 최신 기사, 문서 등 10건을 찾아줘
0번 내용이 마음에 들어. 구조화하고 자세하게 설명해줘.
위 내용에서 키워드를 도출하고 마인드맵을 그려줘.
위 내용의 제목은 '인천유나이티드의 전망' 이야, 한글로 1분길이의 음원으로 변환해 줘.
- 변환할때 multilingual 기능을 사용해`
  ],

  cheer: [
    `축구 구단 인천유나이티드의 응원가를 만들려고 해.
대구 FC의 응원가 '그 겨울'처럼 경쾌한 느낌의 음악을 원해.
목소리는 젊은 남자의 목소리로. 해당 내용을 반영한 Suno 프롬프트를 생성해줘.
Style : 1980s Italian disco, synth-pop revival, male voice, singalong melody, stadium echo FX, retro pads, analog bassline, clapping rhythm
설명 보완용 : Inspired by Righeira's L'estate Sta Finendo, upbeat and nostalgic with warm chords and anthemic chorus lines.
축구 구단 인천유나이티드의 응원가를 만들려고 해. 대구 FC의 응원가 '그 겨울'처럼 경쾌한 느낌의 음악을 원해. Suno에 입력할 프롬프트를 첨부할게.
"Style : 1980s Italian disco, synth-pop revival, male voice, singalong melody, stadium echo FX, retro pads, analog bassline, clapping rhythm
설명 보완용 : Inspired by Righeira's L'estate Sta Finendo, upbeat and nostalgic with warm chords and anthemic chorus lines"
해당 느낌을 학습해서 가사를 써줘. 인천유나이티드 응원곡에 들어갔으면 하는 단어들을 알려줄게. 마음에 드는 걸 선택해서 가사를 작성해줘.
키워드 : 서해 바다, 파랑검정, 숭의, Allez인천, 석양, 파검의 용사`
  ]
};

  tetris: [
    `웹에서 구동되는 테트리스 게임을 만들어줘
 - html과 자바스크립트로 하나의 파일로 작성해 줘
 - 방향키로 블록을 회전 또는 전진, 이동하게 해 줘
 - 매번 새로운 블록이 컬러풀 하게 나와야해
 - 공백없이 완성된 라인은 삭제해 줘
 - 다음에 나올 도형이 우측에 보이게 해줘.
 - 점수를 상단에 표시해줘
 - LEVEL을 표현해줘
 - 스페이스 바를 누르면 바로 하단으로 떨어지게 해줘`
  ]
};
