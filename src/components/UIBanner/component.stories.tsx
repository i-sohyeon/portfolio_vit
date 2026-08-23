import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIBanner } from "./index";

const meta: Meta<typeof UIBanner.List> = {
  title: "Components/UIBanner",
  component: UIBanner.List,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    number: {
      control: "text",
      description: "배너의 순번이나 번호를 표시합니다.",
    },
    title: {
      control: "text",
      description: "배너의 메인 타이틀 텍스트입니다.",
    },
    des: {
      control: "text",
      description: "배너의 설명 텍스트입니다.",
    },
    variant: {
      control: "select",
      options: ["default", "card", "line"],
      description: "배너의 스타일 형태를 지정합니다.",
    },
    bgColor: {
      control: "select",
      options: ["navy", "pink", "white"],
      description: "배너의 배경색을 지정합니다.",
    },
    jContent: {
      control: "select",
      options: ["start", "center", "between", "end"],
      description: "내부 요소 정렬 방식(justify-content)을 지정합니다.",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "텍스트 정렬 방식(align-items)을 지정합니다.",
    },
    icon: {
      control: "text",
      description: "아이콘 클래스명을 지정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof UIBanner.List>;

// 1. 단일 배너 리스트 아이템 기본 스토리
export const Default: Story = {
  render: (args) => (
    <UIBanner.Wrapper>
      <UIBanner.List {...args} />
    </UIBanner.Wrapper>
  ),
  args: {
    number: "01",
    title: "React & TypeScript",
    des: "컴포넌트 기반 아키텍처 및 엄격한 타입 지정을 통한 안정적인 개발",
    bgColor: "navy",
    variant: "default",
  },
};

// 2. 여러 개의 배너를 리스트 형태로 보여주는 스토리
export const BannerList: Story = {
  render: () => (
    <UIBanner.Wrapper>
      <UIBanner.List
        number="01"
        title="Frontend Development"
        des="React 기반 웹 애플리케이션 개발"
        bgColor="navy"
      />
      <UIBanner.List
        number="02"
        title="UI Component Library"
        des="Storybook을 활용한 컴포넌트 문서화 및 테스트"
        bgColor="pink"
      />
      <UIBanner.List
        number="03"
        title="Performance Optimization"
        des="Vite 및 번들링 최적화를 통한 빠른 로딩 경험"
        bgColor="white"
      />
    </UIBanner.Wrapper>
  ),
};

// 3. 스크롤 애니메이션 테스트용 스토리
export const ScrollAnimation: Story = {
  render: () => (
    <div>
      <div
        style={{
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "#666" }}>
          👇 아래로 스크롤하면 배너가 감지되어 애니메이션이 동작합니다.
        </p>
      </div>

      <UIBanner.Wrapper animateOnScroll={true}>
        <UIBanner.List
          number="01"
          title="Scrolled Banner 01"
          des="화면에 등장하면 show 클래스가 활성화됩니다."
          bgColor="navy"
        />
        <UIBanner.List
          number="02"
          title="Scrolled Banner 02"
          des="IntersectionObserver 기반의 관찰 기능 적용"
          bgColor="pink"
        />
        <UIBanner.List
          number="03"
          title="Scrolled Banner 03"
          des="인터랙티브한 사용자 경험 제공"
          bgColor="white"
        />
      </UIBanner.Wrapper>
    </div>
  ),
};