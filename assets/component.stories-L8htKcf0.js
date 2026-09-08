import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./UIBadge-NdQKzjCW.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Components/UIBadge`,component:n,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`solid`,`line`],description:`뱃지의 스타일 형태를 지정합니다.`},bgColor:{control:`select`,options:[`navy`,`pink`,`white`],description:`배경 색상을 지정합니다.`},color:{control:`select`,options:[`white`,`black`,`navy`,`pink`],description:`텍스트 색상을 지정합니다.`},size:{control:`select`,options:[`sm`,`md`],description:`뱃지의 크기를 지정합니다.`},children:{control:`text`,description:`뱃지 내부에 들어갈 라벨 텍스트입니다.`},className:{table:{disable:!0}}}},o={args:{variant:`solid`,bgColor:`navy`,color:`white`,size:`md`,children:`Badge`}},s={args:{variant:`solid`,bgColor:`navy`,color:`white`,size:`md`,children:`Solid Badge`}},c={args:{variant:`line`,bgColor:`transparent`,color:`black`,size:`md`,children:`Line Badge`}},l={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,i.jsx)(n,{...e,size:`sm`,children:`Small`}),(0,i.jsx)(n,{...e,size:`md`,children:`Medium`})]}),args:{variant:`solid`,bgColor:`navy`,color:`white`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    bgColor: "navy",
    color: "white",
    size: "md",
    children: "Badge"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    bgColor: "navy",
    color: "white",
    size: "md",
    children: "Solid Badge"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "line",
    bgColor: "transparent",
    color: "black",
    size: "md",
    children: "Line Badge"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "8px",
    alignItems: "center"
  }}>
      <UIBadge {...args} size="sm">
        Small
      </UIBadge>
      <UIBadge {...args} size="md">
        Medium
      </UIBadge>
    </div>,
  args: {
    variant: "solid",
    bgColor: "navy",
    color: "white"
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Solid`,`Line`,`Sizes`]}))();export{o as Default,c as Line,l as Sizes,s as Solid,u as __namedExportsOrder,a as default};