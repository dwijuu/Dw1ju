/**
 * ====================================================================
 * SITE DATA & CONTENT CONFIGURATION
 * ====================================================================
 * 이 파일에서 웹사이트의 모든 텍스트, 링크, 프로필 정보, 이미지 경로,
 * ASCII 아트 등을 한 곳에서 관리합니다.
 * UI 코드를 수정하지 않고 이 파일의 값만 변경하여 콘텐츠를 바꿀 수 있습니다.
 */

export const siteData = {
  // 상단 윈도우 타이틀바 텍스트
  windowTitle: "Your Text Here (´▽`)♪",

  // 이미지 매핑 테이블
  // 이미지 파일은 /assets/images/ 폴더의 숫자 기반 파일명을 기본으로 합니다.
  // 파일을 교체하면 자동으로 사이트에 반영됩니다.
  images: {
    profile: "assets/images/01.png",       // 01 = profile main image
    thumbnail1: "assets/images/02.png",    // 02 = left thumbnail 1
    thumbnail2: "assets/images/03.png",    // 03 = left thumbnail 2
    notesImage: "assets/images/04.png",    // 04 = notes / center companion image
    rightImage: "assets/images/05.png",    // 05 = right bottom photo
    gallery1: "assets/images/06.png",      // 06 = gallery item 1
    gallery2: "assets/images/07.png",      // 07 = gallery item 2
    gallery3: "assets/images/08.png",      // 08 = gallery item 3
    fallback: "assets/images/placeholder.svg" // fallback placeholder if image missing
  },

  // 상단 탭 목록 (레퍼런스의 "Button", "Button", "Button" 구조)
  tabs: [
    { id: "main", label: "Button" },
    { id: "works", label: "Button" },
    { id: "archive", label: "Button" }
  ],

  // Flash MX 타임라인 헤더 설정
  timeline: {
    label: "Timeline",
    sceneName: "Scene 1",
    zoomLevel: "449%",
    currentFrame: 1,
    totalFrames: 80
  },

  // ====================================================================
  // [LEFT COLUMN] 프로필 영역 데이터
  // ====================================================================
  profile: {
    // 콤보박스 라벨 및 드롭다운 내용
    dropdownLabel: "About Me",
    dropdownItems: [
      "Status: Online (2000s mood)",
      "Location: Cyberspace",
      "Specialty: Digital Crafting",
      "Tool: Flash MX / Photoshop 7.0"
    ],

    // 2열 속성 테이블 (Type / Info)
    infoTable: [
      { type: "name", info: "here" },
      { type: "id", info: "here" },
      { type: "prns", info: "here" }
    ],

    // 프로필 하단 썸네일 캡션
    thumbnails: [
      { id: "thumb1", imageKey: "thumbnail1", alt: "Thumbnail 01" },
      { id: "thumb2", imageKey: "thumbnail2", alt: "Thumbnail 02" }
    ]
  },

  // ====================================================================
  // [CENTER COLUMN] 메인 텍스트 / 에디터 박스 데이터
  // ====================================================================
  center: {
    // 위쪽 텍스트 박스 (Notes.txt)
    notes: {
      fileName: "Notes.txt",
      headlineLink: {
        text: "Carrd by xiu.carrd.co",
        url: "https://xiu.carrd.co"
      },
      content: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Deserunt mollit anim..",
      links: [
        { label: "link 1", url: "#link1" },
        { label: "link 2", url: "#link2" },
        { label: "link 3", url: "#link3" }
      ]
    },

    // 아래쪽 텍스트 박스 (Interests.txt)
    interests: {
      fileName: "Interests.txt",
      content: "Check xiu.carrd.co or xiu2.carrd.co before using as inspo, consec tetur adip elit, sed do eiusmod tempor inci didunt.",
      footerButton: {
        label: "by xiu.carrd.co (¯¬¯)",
        url: "https://xiu.carrd.co"
      }
    }
  },

  // ====================================================================
  // [RIGHT COLUMN] ASCII Art & 하단 이미지
  // ====================================================================
  right: {
    // 피처폰 + 모나 캐릭터 ASCII Art (모노스페이스 고정폭)
    asciiArt: `         []
         [']
     .-------.
     | i*TlI. =|      /\\
     | docomo |     [] []
     ( . . )  /!\\'[]
      ( つ  )   ( 'д')/\\!/\\
     μ s     )  (⊃⊃°-*)
    .--------.   / /c∞⊃
    (I====I)  ,(')⊃⊃ l~
    .--------.       U'U
    | (O) (O) (O) |
    | (1) (2) (3).|
    | (4) (5) (6).|
    | (7) (8) (9).|
    | [*] (0) [#].|
    '-------------'`,
    
    // 하단 이미지 캡션 및 설정
    bottomImageKey: "rightImage",
    bottomImageCaption: "snow cat photo"
  },

  // ====================================================================
  // TAB 2 (WORKS / GALLERY) & TAB 3 (ARCHIVE) 대체 뷰 데이터
  // ====================================================================
  worksTab: {
    title: "Portfolio.exe",
    intro: "Selected works & interactive projects (2000-2026).",
    items: [
      { id: 1, title: "Project_Alpha.swf", imageKey: "gallery1", desc: "Interactive Flash experience with sound" },
      { id: 2, title: "Bitmap_World.gif", imageKey: "gallery2", desc: "Pixel art and vintage raster graphics" },
      { id: 3, title: "SoundTrack_01.mid", imageKey: "gallery3", desc: "Chiptune & synthesizer composition" }
    ]
  },

  archiveTab: {
    title: "System_Log.txt",
    lines: [
      "SYSTEM BOOT: OK",
      "KERNEL: 2.4.18-retro",
      "VRAM: 64MB DirectDraw 8.1",
      "THEME: Windows Classic / Macromedia Studio",
      "STATUS: All components active and responsive."
    ]
  }
};
