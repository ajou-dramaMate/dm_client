export default function CommentItem({ comment }) {
  return (
    <div className="flex flex-col gap-[8px] text-[1.4rem] bg-[#2d1f720d] py-[10px] px-[16px]">
      <div className="flex gap-[8px] items-center justify-between">
        <span className="font-b text-[#3B3F4A]">{comment.name}</span>
        <span className="text-[#9DA0A8] text-[1.3rem]">{comment.date}</span>
      </div>
      <p className="text-[#3B3F4A]">{comment.text}</p>
    </div>
  );
}
