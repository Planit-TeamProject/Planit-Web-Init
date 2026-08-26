import React from "react";

/**
 * 초기화면 (랜딩 페이지)
 *
 * props:
 *  - onNavigate(path: string): 페이지 이동 함수. App.jsx에서 react-router의
 *      navigate를 연결해서 넘겨줌.
 */
const LOGIN_PATH = "/login";
const SIGNUP_PATH = "/signup";

const FEATURES = [
  {
    tag: "단원 인식",
    title: "목차 사진 한 장",
    desc: "PDF 및 이미지로 목차를 업로드하면 AI가 단원과 분량을 자동으로 읽어냅니다.",
  },
  {
    tag: "현실적 배분",
    title: "가능 시간에 맞춘 일정",
    desc: "시작일, 종료일, 선호 학습 시간대를 반영해 무리 없는 일정을 만들어 드립니다.",
  },
  {
    tag: "자동 재조정",
    title: "밀려도 괜찮아요",
    desc: "일정을 직접 옮기면 이후 계획이 자동으로 재배치되고, 며칠 쉬었다면 리플래닝 버튼 하나로 정리됩니다.",
  },
];

const TESTIMONIALS = [
  { quote: "목차 사진만 올렸는데 그날그날 뭘 해야 할지 고민이 사라졌어요.", who: "정보처리기사 준비생" },
  { quote: "밀렸을 때 다시 계획하기 버튼 하나로 정리되는 게 제일 좋아요.", who: "토익 스터디 3개월차" },
  { quote: "목표 시간 대비 몇 % 했는지 보이니까 하루를 안 놓치게 돼요.", who: "선형대수학 복습 중" },
];

export default function LandingPage({ onNavigate }) {
  const goLogin = () => onNavigate(LOGIN_PATH);
  const goSignup = () => onNavigate(SIGNUP_PATH);

  const scrollToFeatures = () => {
    document.getElementById("feat")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav>
        <div>Planit</div>
        <div>
          <button onClick={goLogin}>로그인</button>
          <button onClick={goSignup}>회원가입</button>
        </div>
      </nav>

      <section>
        <p>AI 기반 개인 맞춤 학습 플래너</p>
        <h1>
          나에게 맞는 학습 계획을
          <br />
          AI가 직접 만들어드려요
        </h1>
        <p>
          목차 사진 한 장이면 충분해요. 시험일과 하루 가능 시간만 알려주면
          AI가 현실적인 학습 일정을 세우고, 밀리면 알아서 다시 짜드려요.
        </p>
        <div>
          <button onClick={goSignup}>무료로 시작하기</button>
          <button onClick={scrollToFeatures}>더 알아보기 ↓</button>
        </div>
      </section>

      <section id="feat">
        <h2>이렇게 작동해요</h2>
        <p>복잡한 세팅 없이, 세 가지만 알려주면 나머지는 AI가 계산합니다.</p>
        <div>
          {FEATURES.map((f) => (
            <div key={f.title}>
              <div>{f.tag}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        {TESTIMONIALS.map((t) => (
          <div key={t.who}>
            <div>"{t.quote}"</div>
            <div>— {t.who}</div>
          </div>
        ))}
      </section>

      <section>
        <h2>오늘, 계획을 세워보세요</h2>
        <button onClick={goSignup}>Planit 시작하기</button>
      </section>

      <footer>
        <span>© 2026 Planit</span>
        <span>ABOUT · PRIVACY · CONTACT</span>
      </footer>
    </div>
  );
}
