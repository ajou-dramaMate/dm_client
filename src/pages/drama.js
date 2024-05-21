import BottomTabNav from "@components/bottomTabNav";
import DramaItem from "@components/dramaItem";

export default function Drama() {
  return (
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pt-[50px] pb-[80px]">
      <form className="relative">
        <input
          className="w-full bg-slate-300 rounded-[10px] py-[10px] pl-[20px] pr-[50px]"
          type="text"
          placeholder="드라마 제목을 검색해 보세요."
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-[16px]">
          검색
        </button>
      </form>
      <div className="grid grid-cols-3 justify-items-center gap-y-[16px]">
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
        <DramaItem />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
