export default function ReviewItem() {
  return (
    <div className="flex flex-col gap-[4px] bg-slate-200 py-[10px] px-[16px]">
      <span>댓글 내용</span>
      <div className="flex gap-[4px] text-[1.4rem] font-m">
        <span>작성자</span>
        <span>작성일</span>
      </div>
    </div>
  );
}
