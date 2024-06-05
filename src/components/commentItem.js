export default function CommentItem({ comment }) {
  return (
    <div className="flex flex-col gap-[4px] bg-slate-200 py-[10px] px-[16px]">
      <span>{comment.text}</span>
      <div className="flex gap-[4px] text-[1.4rem] font-m">
        <span>{comment.name}</span>
        <span>{comment.date}</span>
      </div>
    </div>
  );
}
