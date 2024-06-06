export default function CommentItem({ comment }) {
  return (
    <div className="flex flex-col bg-slate-100 py-[15px] px-[16px]">
      <span className="break-words">{comment.text}</span>
      <div className="flex gap-[4px] text-[1.4rem] text-slate-500">
        <span>{comment.name}</span>
        <span>{comment.date}</span>
      </div>
    </div>
  );
}
