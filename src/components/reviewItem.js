export default function ReviewItem({ item }) {
  return (
    <div className="flex flex-col gap-[4px] bg-slate-200 py-[10px] px-[16px]">
      <span>{item.contents}</span>
      <div className="flex gap-[4px] text-[1.4rem] font-m">
        <span>{item.name}</span>
        <span>{item.date}</span>
        <span>{item.star}</span>
      </div>
    </div>
  );
}
