import BottomTabNav from "@components/bottomTabNav";
import DramaItem from "@components/dramaItem";
import OttItem from "@components/ottItem";

export default function Ott() {
  const MAX_SELECT_CNT = 3;

  return (
    <div className="overflow-y-auto flex flex-col gap-[16px] px-[16px] pt-[20px] pb-[80px]">
      <span>
        현재 {1}개 선택 / {MAX_SELECT_CNT}
      </span>
      <div className="grid grid-cols-3 justify-items-center gap-y-[16px]">
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
      </div>
      <button className="py-[10px] px-[16px] bg-brand text-white disabled:bg-slate-300 disabled:text-black rounded-[10px]">
        OTT 추천받기
      </button>
      <div className="flex flex-col gap-[10px]">
        <OttItem />
        <OttItem />
        <OttItem />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
