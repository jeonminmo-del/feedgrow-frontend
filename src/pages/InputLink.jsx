// InputLink.jsx - 링크 입력 화면
// URL: /input  →  분석하기 클릭 후 3초 로딩 → /result 이동
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link2, Loader2, Sprout, ArrowLeft } from 'lucide-react'

export default function InputLink() {
  const navigate = useNavigate()
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAnalyze = () => {
    if (!url.trim()) return
    setIsLoading(true)
    setTimeout(() => navigate('/result'), 3000)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAnalyze()
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">

      {/* 배경 장식 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* 네비게이션 */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 bg-white border-b border-slate-100 shadow-sm">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          뒤로
        </button>
        <div className="flex items-center gap-2">
          <Sprout size={18} className="text-teal-500" />
          <span className="font-title font-bold text-slate-900 text-lg tracking-tight">
            FEED<span className="text-teal-500">GROW</span>
          </span>
        </div>
        <div className="w-16" />
      </nav>

      {/* 메인 */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-10">

        {/* 헤드라인 */}
        <div className="text-center flex flex-col gap-3 max-w-lg">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight">
            악플은 걸러내고,<br />
            <span className="text-teal-500">진짜 피드백만</span> 남깁니다.
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            YouTube 영상 링크를 입력하면 AI가 댓글을 분석하고<br />
            악플을 건설적인 피드백으로 정화해드립니다.
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="w-full max-w-xl flex flex-col gap-4">

          {/* 입력창 */}
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-4 focus-within:border-teal-400 focus-within:shadow-sm transition-all shadow-sm">
            <Link2 size={20} className="text-slate-400 shrink-0" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://www.youtube.com/watch?v=..."
              disabled={isLoading}
              className="flex-1 bg-transparent text-slate-800 placeholder:text-slate-300 text-sm outline-none disabled:opacity-50"
            />
          </div>

          {/* 분석하기 버튼 */}
          <button
            onClick={handleAnalyze}
            disabled={isLoading || !url.trim()}
            className="w-full py-4 rounded-2xl font-semibold text-base transition-all duration-200
              bg-teal-500 text-white hover:bg-teal-600 active:scale-[0.98]
              disabled:opacity-40 disabled:cursor-not-allowed
              flex items-center justify-center gap-2 shadow-md shadow-teal-100"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>AI 분석 중...</span>
              </>
            ) : (
              '분석하기'
            )}
          </button>

          {isLoading && (
            <p className="text-center text-slate-400 text-xs animate-pulse">
              댓글을 수집하고 AI가 분석하고 있습니다. 잠시만 기다려주세요.
            </p>
          )}
        </div>

        <p className="text-slate-300 text-xs text-center">
          * 프로토타입은 가상의 댓글 데이터를 사용해 분석 결과를 시연합니다.
        </p>
      </main>
    </div>
  )
}
