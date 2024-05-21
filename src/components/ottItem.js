export default function OttItem() {
  return (
    <div className="flex gap-[8px] items-center">
      <span>{1}</span>
      <div className="flex gap-[18px] items-center">
        <div className="w-[170px] h-[50px] bg-slate-200"></div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex gap-[4px]">
            <span>1개월</span>
            <span>5,500원</span>
          </div>
          <span className="font-m text-[1.4rem]">
            드라마1, 드라마2, 드라마3
          </span>
        </div>
      </div>
    </div>
  );
}
