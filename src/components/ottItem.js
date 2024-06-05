export default function OttItem({ item }) {
  return (
    <div className="flex gap-[8px] items-center">
      <span>{1}</span>
      <div className="flex gap-[18px] items-center">
        <img
          alt="포스터"
          src={`data:image/png;base64,${item.ott_image}`}
          className="w-[170px] h-[50px] bg-slate-200"
        />
        <div className="flex flex-col gap-[4px]">
          <div className="flex gap-[4px]">
            <span>1개월</span>
            <span>{item.price}</span>
          </div>
          <span className="font-m text-[1.4rem]">{item.dramas.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
