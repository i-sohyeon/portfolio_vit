import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./UIBanner-C-qZzCVz.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`Components/UIBanner`,component:n.List,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{number:{control:`text`,description:`배너의 순번이나 번호를 표시합니다.`},title:{control:`text`,description:`배너의 메인 타이틀 텍스트입니다.`},des:{control:`text`,description:`배너의 설명 텍스트입니다.`},variant:{control:`select`,options:[`default`,`card`,`line`],description:`배너의 스타일 형태를 지정합니다.`},bgColor:{control:`select`,options:[`navy`,`pink`,`white`],description:`배너의 배경색을 지정합니다.`},jContent:{control:`select`,options:[`start`,`center`,`between`,`end`],description:`내부 요소 정렬 방식(justify-content)을 지정합니다.`},align:{control:`select`,options:[`start`,`center`,`end`],description:`텍스트 정렬 방식(align-items)을 지정합니다.`},icon:{control:`text`,description:`아이콘 클래스명을 지정합니다.`}}},o={render:e=>(0,i.jsx)(n.Wrapper,{children:(0,i.jsx)(n.List,{...e})}),args:{number:`01`,title:`React & TypeScript`,des:`컴포넌트 기반 아키텍처 및 엄격한 타입 지정을 통한 안정적인 개발`,bgColor:`navy`,variant:`default`}},s={render:()=>(0,i.jsxs)(n.Wrapper,{children:[(0,i.jsx)(n.List,{number:`01`,title:`Frontend Development`,des:`React 기반 웹 애플리케이션 개발`,bgColor:`navy`}),(0,i.jsx)(n.List,{number:`02`,title:`UI Component Library`,des:`Storybook을 활용한 컴포넌트 문서화 및 테스트`,bgColor:`pink`}),(0,i.jsx)(n.List,{number:`03`,title:`Performance Optimization`,des:`Vite 및 번들링 최적화를 통한 빠른 로딩 경험`,bgColor:`white`})]})},c={render:()=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{height:`60vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`#f5f5f5`,borderRadius:`8px`,marginBottom:`20px`},children:(0,i.jsx)(`p`,{style:{color:`#666`},children:`👇 아래로 스크롤하면 배너가 감지되어 애니메이션이 동작합니다.`})}),(0,i.jsxs)(n.Wrapper,{animateOnScroll:!0,children:[(0,i.jsx)(n.List,{number:`01`,title:`Scrolled Banner 01`,des:`화면에 등장하면 show 클래스가 활성화됩니다.`,bgColor:`navy`}),(0,i.jsx)(n.List,{number:`02`,title:`Scrolled Banner 02`,des:`IntersectionObserver 기반의 관찰 기능 적용`,bgColor:`pink`}),(0,i.jsx)(n.List,{number:`03`,title:`Scrolled Banner 03`,des:`인터랙티브한 사용자 경험 제공`,bgColor:`white`})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <UIBanner.Wrapper>
      <UIBanner.List {...args} />
    </UIBanner.Wrapper>,
  args: {
    number: "01",
    title: "React & TypeScript",
    des: "컴포넌트 기반 아키텍처 및 엄격한 타입 지정을 통한 안정적인 개발",
    bgColor: "navy",
    variant: "default"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <UIBanner.Wrapper>
      <UIBanner.List number="01" title="Frontend Development" des="React 기반 웹 애플리케이션 개발" bgColor="navy" />
      <UIBanner.List number="02" title="UI Component Library" des="Storybook을 활용한 컴포넌트 문서화 및 테스트" bgColor="pink" />
      <UIBanner.List number="03" title="Performance Optimization" des="Vite 및 번들링 최적화를 통한 빠른 로딩 경험" bgColor="white" />
    </UIBanner.Wrapper>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      height: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
        <p style={{
        color: "#666"
      }}>
          👇 아래로 스크롤하면 배너가 감지되어 애니메이션이 동작합니다.
        </p>
      </div>

      <UIBanner.Wrapper animateOnScroll={true}>
        <UIBanner.List number="01" title="Scrolled Banner 01" des="화면에 등장하면 show 클래스가 활성화됩니다." bgColor="navy" />
        <UIBanner.List number="02" title="Scrolled Banner 02" des="IntersectionObserver 기반의 관찰 기능 적용" bgColor="pink" />
        <UIBanner.List number="03" title="Scrolled Banner 03" des="인터랙티브한 사용자 경험 제공" bgColor="white" />
      </UIBanner.Wrapper>
    </div>
}`,...c.parameters?.docs?.source}}},l=[`Default`,`BannerList`,`ScrollAnimation`]}))();export{s as BannerList,o as Default,c as ScrollAnimation,l as __namedExportsOrder,a as default};