// Home.jsx - 홈 화면
// URL: /  →  로그인 버튼 클릭 시 /input 이동
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sprout } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-cyan-50 to-white flex flex-col items-center justify-center relative overflow-hidden">

      {/* 배경 장식 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

        {/* 아이콘 */}
        <div className="w-16 h-16 rounded-2xl bg-white border border-teal-100 flex items-center justify-center shadow-sm">
          <Sprout className="text-teal-500" size={32} />
        </div>

        {/* 타이틀 */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-title text-7xl md:text-8xl font-bold tracking-tight">
            <span className="text-slate-900">FEED</span>
            <span className="text-teal-500">GROW</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-sm leading-relaxed">
            악플은 걸러내고, 진짜 피드백만 남깁니다.
          </p>
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap justify-center gap-2">
          {['AI 악플 정화', '크리에이터 성장', '댓글 분석'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-sky-200 bg-white/70 text-slate-500 text-xs shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* 버튼 영역 */}
        <div className="flex flex-col items-center gap-3">
          {/* 로그인 버튼 */}
          <button
            onClick={() => navigate('/input')}
            className="group flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-full text-base hover:bg-teal-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-teal-200"
          >
            로그인
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* 회원가입 링크 (비활성) */}
          <button className="text-slate-400 text-sm hover:text-teal-500 transition-colors underline underline-offset-2">
            회원가입
          </button>
        </div>
      </div>

      <p className="absolute bottom-8 text-slate-400 text-xs">
        © 2025 FEEDGROW — Powered by AI
      </p>
    </div>
  )
}
