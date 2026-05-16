// Home.jsx - 홈 화면
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sprout } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-violet-200 flex flex-col items-center justify-center relative overflow-hidden">

      {/* 배경 컬러 블롭 */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

        <div className="w-16 h-16 rounded-2xl bg-white/70 border border-indigo-100 flex items-center justify-center shadow-sm">
          <Sprout className="text-teal-500" size={32} />
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="font-title text-7xl md:text-8xl font-bold tracking-tight">
            <span className="text-slate-900">FEED</span>
            <span className="text-teal-500">GROW</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-sm leading-relaxed">
            악플은 걸러내고, 진짜 피드백만 남깁니다.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {['AI 악플 정화', '크리에이터 성장', '댓글 분석'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-indigo-200 bg-white/60 text-slate-500 text-xs shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() => navigate('/input')}
            className="group flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-full text-base hover:bg-teal-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-teal-200"
          >
            로그인
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
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
