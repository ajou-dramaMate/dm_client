export default function OttItem({ item, i }) {
  return (
    <div className="flex gap-[8px] items-center">
      <span
        className={`font-b text-[1.4rem] ${i === 0 ? "text-[#FF0000]" : ""}`}
      >
        {i + 1}
      </span>
      <div className="flex gap-[18px] items-center">
        <img
          alt="포스터"
          src={`data:image/png;base64,${item.ott_image}`}
          className="w-[170px] h-[50px] bg-slate-200"
        />
        <div className="flex flex-col gap-[4px]">
          <div className="flex gap-[4px]">
            <span className="font-b">
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 /
              월
            </span>
          </div>
          <span className="font-m text-[1.3rem] text-[#3B3F4A]">
            {item.dramas.join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
}
