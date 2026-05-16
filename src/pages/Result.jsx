// Result.jsx - 분석 결과 화면
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sprout, ArrowLeft, BarChart2, ShieldCheck, MessageSquare, Zap, Copy, ImageDown, Check } from 'lucide-react'
import CommentCard from '../components/CommentCard'
import { dummyComments, dummyStats, dummyInsights } from '../data/dummyComments'

function StatItem({ label, value, color = 'text-slate-900' }) {
  return (
    <div className="bg-white/70 border border-indigo-100 rounded-xl p-4 flex flex-col gap-1 shadow-sm">
      <span className="text-slate-400 text-xs">{label}</span>
      <span className={`text-2xl font-bold ${color}`}>{value}</span>
    </div>
  )
}

function InsightSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = dummyInsights
      .map((item) => `${item.id}. [${item.category}]\n${item.content}`)
      .join('\n\n')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="bg-white/80 border border-indigo-100 rounded-2xl shadow-sm overflow-hidden mb-6">
      <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-50">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-teal-500" />
            <h3 className="text-slate-800 font-semibold text-sm">AI 인사이트 요약</h3>
          </div>
          <p className="text-slate-400 text-xs">건설적 의견을 카테고리별로 묶었습니다.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors text-xs"
          >
            {copied ? <Check size={13} className="text-teal-500" /> : <Copy size={13} />}
            {copied ? '복사됨' : '복사'}
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors text-xs">
            <ImageDown size={13} />
            이미지
          </button>
        </div>
      </div>
      <div className="divide-y divide-indigo-50">
        {dummyInsights.map((item) => (
          <div key={item.id} className="flex gap-4 px-6 py-4 hover:bg-indigo-50/30 transition-colors">
            <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {item.id}
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-teal-600 text-xs font-semibold">{item.category}</span>
              <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Result() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col">

      {/* 네비게이션 */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-sm border-b border-indigo-100 shadow-sm shrink-0">
        <button
          onClick={() => navigate('/input')}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          다시 분석
        </button>
        <div className="flex items-center gap-2">
          <Sprout size={18} className="text-teal-500" />
          <span className="font-title font-bold text-slate-900 text-lg tracking-tight">
            FEED<span className="text-teal-500">GROW</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-teal-600 text-xs border border-teal-200 bg-white/60 px-3 py-1 rounded-full">
          <ShieldCheck size={13} />
          <span>분석 완료</span>
        </div>
      </nav>

      {/* 본문 */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* 좌측 패널 */}
        <aside className="md:w-80 lg:w-96 shrink-0 border-b md:border-b-0 md:border-r border-indigo-100 p-6 flex flex-col gap-5 md:overflow-y-auto bg-white/40 backdrop-blur-sm">

          <div className="flex items-center gap-2">
            <BarChart2 size={18} className="text-teal-500" />
            <h2 className="text-slate-900 font-semibold text-base">AI 분석 요약</h2>
          </div>

          <div className="bg-white/60 border border-indigo-100 rounded-xl p-4 flex flex-col gap-1">
            <span className="text-slate-400 text-xs">분석된 영상</span>
            <span className="text-slate-700 text-sm truncate">{dummyStats.채널명}</span>
            <span className="text-slate-400 text-xs">분석 소요: {dummyStats.분석소요}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatItem label="총 댓글 수" value={`${dummyStats.총댓글수}개`} />
            <StatItem label="악플 감지" value={`${dummyStats.악플감지}개`} color="text-red-500" />
            <StatItem label="정화 완료" value={`${dummyStats.정화완료}개`} color="text-teal-500" />
            <StatItem label="일반 댓글" value={`${dummyStats.일반댓글}개`} color="text-slate-500" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-xs">악플 비율</span>
              <span className="text-red-500 text-xs font-semibold">{dummyStats.악플비율}%</span>
            </div>
            <div className="h-2 bg-white/60 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full" style={{ width: `${dummyStats.악플비율}%` }} />
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-slate-500 text-xs">정화 성공률</span>
              <span className="text-teal-500 text-xs font-semibold">100%</span>
            </div>
            <div className="h-2 bg-white/60 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
            </div>
          </div>

          <div className="bg-teal-50/80 border border-teal-100 rounded-xl p-4 flex gap-3">
            <Zap size={16} className="text-teal-500 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-teal-700 text-xs font-semibold">AI 인사이트</span>
              <p className="text-slate-500 text-xs leading-relaxed">
                감지된 악플의 대다수는 <span className="text-slate-700 font-medium">콘텐츠 퀄리티</span>와
                <span className="text-slate-700 font-medium"> 광고 빈도</span>에 관한 불만입니다.
              </p>
            </div>
          </div>

          <div className="mt-auto bg-white/50 border border-indigo-100 rounded-xl p-4 flex items-start gap-3">
            <MessageSquare size={16} className="text-slate-400 shrink-0 mt-0.5" />
            <p className="text-slate-400 text-xs leading-relaxed">
              원본 악플은 블러 처리됩니다.
              <span className="text-slate-600 font-medium"> 클릭</span>하면 확인할 수 있습니다.
            </p>
          </div>
        </aside>

        {/* 우측 패널 */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-slate-900 font-semibold text-base">정화된 댓글 리스트</h2>
              <p className="text-slate-400 text-xs">{dummyComments.length}개의 악플이 건설적인 피드백으로 변환되었습니다.</p>
            </div>
            <div className="hidden sm:flex flex-col gap-1 text-right">
              <div className="flex items-center justify-end gap-1.5">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <span className="text-slate-400 text-xs">정화된 피드백</span>
              </div>
              <div className="flex items-center justify-end gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-slate-400 text-xs">원본 악플 (블러)</span>
              </div>
            </div>
          </div>

          <InsightSection />

          <div className="flex flex-col gap-4">
            {dummyComments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
          <div className="h-8" />
        </main>
      </div>
    </div>
  )
}
