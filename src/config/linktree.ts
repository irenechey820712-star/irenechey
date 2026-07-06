export type IconName =
  | "dorms-community"
  | "naver-blog"
  | "instagram"
  | "kakao-chat"
  | "kakao-group"
  | "download"
  | "manual"
  | "privacy"
  | "school"
  | "docs"
  | "contact"
  | "magazine"
  | "code"
  | "game"
  | "daisy"
  | "sun-hat"
  | "travel";

export type Thumb =
  | { kind: "image"; src: string; alt: string }
  | { kind: "icon"; icon: IconName };

export type LinkItem = {
  name: string;
  description?: string;
  href: string;
  thumb?: Thumb;
};

export type LinkCard =
  | {
      kind: "group";
      id: string;
      number: string;
      name: string;
      description: string;
      thumb: Thumb;
      items: LinkItem[];
    }
  | {
      kind: "link";
      id: string;
      number: string;
      name: string;
      description: string;
      href: string;
      thumb: Thumb;
    };

export const profile = {
  teacherName: "아이링쌤",
  title: "DoRms 교사 아이링쌤",
  introTitle: "DoRms 교사 아이링쌤",
  introDescription: "Who Has Seen the Wind? - 바이브코딩의 세계로!",
  catalogTitle: "DoRms 아이링쌤",
  catalogDescription: "바이브코딩과 여행을 사랑하는 아이링쌤의 활동을 이곳에 모아둡니다."
};

export const cards: LinkCard[] = [
  {
    kind: "group",
    id: "dorms-activity",
    number: "01",
    name: "도름스 커뮤니티 나의 활동",
    description: "DoRms에서 나누고 있는 나의 활동을 모아두는 곳",
    thumb: { kind: "image", src: "/assets/dorms-community.png", alt: "DoRms community" },
    items: [
      { name: "자료 공유", description: "도름스 자료 공유 게시판", href: "https://dorms.school/resources", thumb: { kind: "icon", icon: "daisy" } },
      { name: "내 앱 활동", description: "내가 만든 앱 활동 보기", href: "https://dorms.school/apps/ac53d80b-5f9e-421b-9aa7-b4f3d19614e1", thumb: { kind: "icon", icon: "travel" } }
    ]
  },
  {
    kind: "link",
    id: "naver-blog",
    number: "02",
    name: "네이버 블로그",
    description: "아이링쌤의 이야기",
    href: "https://blog.naver.com/irenechey",
    thumb: { kind: "icon", icon: "naver-blog" }
  },
  {
    kind: "link",
    id: "instagram",
    number: "03",
    name: "인스타그램",
    description: "여행과 일상 기록",
    href: "https://www.instagram.com/irene_xoxo0713",
    thumb: { kind: "icon", icon: "instagram" }
  },
  {
    kind: "group",
    id: "contact",
    number: "04",
    name: "연락처",
    description: "궁금한 점은 이메일로 문의해 주세요",
    thumb: { kind: "icon", icon: "sun-hat" },
    items: [
      { name: "이메일 문의", description: "irenechey@naver.com", href: "mailto:irenechey@naver.com", thumb: { kind: "icon", icon: "contact" } }
    ]
  }
];
