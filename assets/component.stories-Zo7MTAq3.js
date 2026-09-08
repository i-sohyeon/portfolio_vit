import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,n as r,r as i,t as a}from"./component-BQMMg4TW.js";var o,s,c,l,u;e((()=>{i(),r(),o=t(),s={title:`Components/UIText`,component:a.Basic,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`xxs`,`xs`,`sm`,`md`,`lg`,`xl`,`xxl`]},weight:{control:`select`,options:[`normal`,`bold`]},color:{control:`select`,options:[`white`,`blue`,`black`]},display:{control:`select`,options:[`block`,`inline`,`inline-block`]}}},c={name:`UIText.Basic`,render:e=>(0,o.jsx)(a.Basic,{...e}),args:{variant:`p`,size:`md`,weight:`normal`,children:`안녕하세요, 기본 텍스트 컴포넌트입니다.`}},l={name:`UIText.Header`,render:e=>(0,o.jsx)(a.Header,{...e}),decorators:[e=>(0,o.jsx)(n,{children:(0,o.jsx)(e,{})})],args:{size:`md`,children:`섹션 제목입니다`,button:`더보기`,linkTo:`/about`,color:`black`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "UIText.Basic",
  render: args => <UIText.Basic {...args} />,
  args: {
    variant: "p",
    size: "md",
    // 예시 값
    weight: "normal",
    children: "안녕하세요, 기본 텍스트 컴포넌트입니다."
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "UIText.Header",
  render: args => <UIText.Header {...args} />,
  // 중요! Header 내부에 <Link>가 있으므로 라우터 환경을 데코레이터로 감싸줍니다.
  decorators: [Story => <BrowserRouter>
        <Story />
      </BrowserRouter>],
  args: {
    size: "md",
    children: "섹션 제목입니다",
    button: "더보기",
    linkTo: "/about",
    color: 'black'
  }
}`,...l.parameters?.docs?.source}}},u=[`BasicText`,`HeaderText`]}))();export{c as BasicText,l as HeaderText,u as __namedExportsOrder,s as default};