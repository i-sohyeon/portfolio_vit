import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./UIBanner-C-qZzCVz.js";import{n as i,r as a,t as o}from"./UIText-CH1OO3ye.js";import{t as s}from"./component-BQMMg4TW.js";var c,l,u,d,f,p;e((()=>{a(),r(),o(),c=t(),l={title:`Components/UIBox`,component:i.Div,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`content`,`flex`,`card`],description:`UIBox 스타일에 적용할 변형 옵션`},align:{control:`select`,options:[`left`,`center`,`right`],description:`텍스트 정렬 방향`},display:{control:`select`,options:[`flex`,`block`,`inline-block`,`grid`],description:`디스플레이 형태`},jContent:{control:`select`,options:[`space-between`],description:`Flex justify-content 속성`},aItems:{control:`select`,options:[`top`,`middle`,`bottom`],description:`Flex align-items 속성`},scroll:{control:`select`,options:[`scroll`],description:`스크롤 적용 여부`},as:{control:`text`,description:`렌더링할 HTML 태그 (예: div, article, section)`},className:{control:`text`,description:`추가 커스텀 CSS 클래스명`}}},u={args:{as:`article`,variant:`content`,align:`left`},render:e=>(0,c.jsx)(i.Article,{...e,style:{padding:`20px`},children:(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{style:{margin:`0 0 10px 0`},children:`Article 제목`}),(0,c.jsx)(`p`,{style:{margin:0},children:`UIBox.Article 레이아웃 내부 콘텐츠입니다.`})]})})},d={args:{as:`div`,variant:`card`,display:`flex`,align:`left`,aItems:`top`,jContent:`space-between`,children:`UIBox.Div 카드 형태 예시입니다.`},render:e=>(0,c.jsxs)(i.Div,{...e,variant:`flex`,jContent:`space-between`,aItems:`top`,className:`pt-0`,children:[(0,c.jsxs)(n.Wrapper,{className:`mr-5 mb-4`,animateOnScroll:!0,children:[(0,c.jsx)(n.List,{icon:`study`,number:`2020`,variant:`list`,bgColor:`type1`,title:`ui/ux 스마트웹&앱디자인 (웹 퍼블리싱&프론트엔드) 실무과정`,des:`(2020.04~2020.10)`,align:`left`}),(0,c.jsx)(n.List,{icon:`company`,number:`2021`,variant:`list`,bgColor:`type2`,title:`인조이웍스(enjoy works)`,des:`(2021.01 ~ 2022.04)`}),(0,c.jsx)(n.List,{icon:`study`,number:`2022`,variant:`list`,bgColor:`type3`,title:`[프론트엔드] 리액트 (React.js 자바스크립트)_주말`,des:`(2022.01 ~2022.04)`}),(0,c.jsx)(n.List,{icon:`company`,number:`2023`,variant:`list`,bgColor:`type4`,title:`인픽스(INPIX)`,des:`(2022.06 ~ 재직 중)`}),(0,c.jsx)(n.List,{icon:`study`,number:`2024`,variant:`list`,bgColor:`type5`,title:`한국방송통신대학교 컴퓨터과학과 편입 (졸업)`,des:`(2023.09 ~ 2026.08)`}),(0,c.jsx)(n.List,{icon:`company`,number:`2026`,variant:`list`,bgColor:`type6`,title:`??????`,des:`(????.?? ~ )`})]}),(0,c.jsxs)(i.Div,{variant:`card`,children:[(0,c.jsx)(s.Header,{as:`p`,font:`tenada`,size:`md`,className:`mb-1`,children:`프로젝트 경험`}),(0,c.jsx)(s.Header,{as:`p`,font:`tenada`,size:`md`,color:`blue`,children:`Project Experience`}),(0,c.jsx)(`p`,{children:`리스트 영역`}),(0,c.jsx)(`p`,{children:`리스트 영역`}),(0,c.jsx)(`p`,{children:`리스트 영역`}),(0,c.jsx)(`p`,{children:`리스트 영역`}),(0,c.jsx)(`p`,{children:`리스트 영역`}),(0,c.jsx)(`p`,{children:`리스트 영역`})]})]})},f={args:{as:`div`,scroll:`scroll`,imgSrc:`https://via.placeholder.com/100`,href:`https://example.com`},render:e=>(0,c.jsx)(i.Scroll,{...e,style:{padding:`20px`},children:(0,c.jsx)(`p`,{style:{margin:`0 0 10px 0`},children:`스크롤 영역 및 링크 이미지가 포함된 영역입니다.`})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    as: "article",
    variant: "content",
    align: "left"
  },
  render: args => <UIBox.Article {...args} style={{
    padding: "20px"
  }}>
      <div>
        <h3 style={{
        margin: "0 0 10px 0"
      }}>Article 제목</h3>
        <p style={{
        margin: 0
      }}>UIBox.Article 레이아웃 내부 콘텐츠입니다.</p>
      </div>
    </UIBox.Article>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    as: "div",
    variant: "card",
    display: "flex",
    align: "left",
    aItems: "top",
    jContent: "space-between",
    children: "UIBox.Div 카드 형태 예시입니다."
  },
  render: args => <UIBox.Div {...args} variant="flex" jContent="space-between" aItems="top" className="pt-0">
    <UIBanner.Wrapper className="mr-5 mb-4" animateOnScroll>
      <UIBanner.List icon="study" number="2020" variant="list" bgColor="type1" title="ui/ux 스마트웹&앱디자인 (웹 퍼블리싱&프론트엔드) 실무과정" des="(2020.04~2020.10)" align="left" />
      <UIBanner.List icon="company" number="2021" variant="list" bgColor="type2" title="인조이웍스(enjoy works)" des="(2021.01 ~ 2022.04)" />
      <UIBanner.List icon="study" number="2022" variant="list" bgColor="type3" title="[프론트엔드] 리액트 (React.js 자바스크립트)_주말" des="(2022.01 ~2022.04)" />
      <UIBanner.List icon="company" number="2023" variant="list" bgColor="type4" title="인픽스(INPIX)" des="(2022.06 ~ 재직 중)" />
      <UIBanner.List icon="study" number="2024" variant="list" bgColor="type5" title="한국방송통신대학교 컴퓨터과학과 편입 (졸업)" des="(2023.09 ~ 2026.08)" />
      <UIBanner.List icon="company" number="2026" variant="list" bgColor="type6" title="??????" des="(????.?? ~ )" />
    </UIBanner.Wrapper>
    
    <UIBox.Div variant="card">
      <UIText.Header as="p" font="tenada" size="md" className="mb-1">
        프로젝트 경험
      </UIText.Header>
      <UIText.Header as="p" font="tenada" size="md" color="blue">
        Project Experience
      </UIText.Header>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
      <p>리스트 영역</p>
    </UIBox.Div>
  </UIBox.Div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    as: "div",
    scroll: "scroll",
    imgSrc: "https://via.placeholder.com/100",
    href: "https://example.com"
  },
  render: args => <UIBox.Scroll {...args} style={{
    padding: "20px"
  }}>
      <p style={{
      margin: "0 0 10px 0"
    }}>
        스크롤 영역 및 링크 이미지가 포함된 영역입니다.
      </p>
    </UIBox.Scroll>
}`,...f.parameters?.docs?.source}}},p=[`ArticleBox`,`DivBox`,`ScrollBox`]}))();export{u as ArticleBox,d as DivBox,f as ScrollBox,p as __namedExportsOrder,l as default};