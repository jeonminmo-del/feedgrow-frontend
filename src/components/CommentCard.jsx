// CommentCard.jsx - 댓글 카드
// 기본: 정화된 피드백 선명 + 원본 악플 블러
// 원본 영역 클릭 → 블러 해제
import { useState } from 'react'
import { Sparkles, AlertTriangle } from 'lucide-react'

export default function CommentCard({ comment }) {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* 작성자 */}
      <div className="flex items-center justify-between">
        <span className="text-slate-400 text-xs font-mono">@{comment.작성자}</span>
        {isRevealed && (
          <span className="text-[11px] text-red-400 border border-red-200 bg-red-50 px-2 py-0.5 rounded-full">
            원본 공개됨
          </span>
        )}
      </div>

      {/* 정화된 피드백 — 항상 선명하게 */}
      <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-teal-600 text-xs font-semibold">
          <Sparkles size={12} />
          <span>정화된 피드백</span>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">{comment.정화된_피드백}</p>
      </div>

      {/* 원본 악플 — 기본 블러, 클릭하면 해제 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-red-500 text-xs font-semibold">
          <AlertTriangle size={12} />
          <span>원본 악플</span>
          {!isRevealed && (
            <span className="ml-auto text-slate-400 text-[11px] font-normal">클릭하면 원본 확인</span>
          )}
        </div>

        <div
          onClick={() => !isRevealed && setIsRevealed(true)}
          className={[
            'bg-red-50 border border-red-100 rounded-xl p-4 transition-all duration-300 select-none',
            !isRevealed ? 'blur-sm cursor-pointer hover:blur-[3px]' : 'blur-none',
          ].join(' ')}
        >
          <p className="text-slate-600 text-sm leading-relaxed">{comment.원본_악플}</p>
        </div>

        {!isRevealed && (
          <p className="text-center text-slate-400 text-[11px]">
            흐릿하게 처리된 내용입니다. 클릭하면 원본이 표시됩니다.
          </p>
        )}
      </div>
    </div>
  )
}
