// ─────────────────────────────────────────────────────────
// App.jsx - 라우터(페이지 경로) 설정 파일
// 각 URL 경로에 어떤 화면을 보여줄지 정의합니다.
//   /        → 홈 화면 (Home.jsx)
//   /input   → 링크 입력 화면 (InputLink.jsx)
//   /result  → 분석 결과 화면 (Result.jsx)
// ─────────────────────────────────────────────────────────
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import InputLink from './pages/InputLink'
import Result from './pages/Result'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 화면 */}
        <Route path="/" element={<Home />} />

        {/* 링크 입력 화면 */}
        <Route path="/input" element={<InputLink />} />

        {/* 분석 결과 화면 */}
        <Route path="/result" element={<Result />} />

        {/* 정의되지 않은 경로는 홈으로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
