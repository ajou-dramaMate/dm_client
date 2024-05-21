import BottomTabNav from "@components/bottomTabNav";
import ReviewItem from "@components/reviewItem";

export default function DramaDetail() {
  return (
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pt-[50px] pb-[80px]">
      <div className="flex gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <div className="w-[150px] h-[210px] bg-slate-200"></div>
          <span>줄거리</span>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[4px]">
            <span className="font-b text-[1.8rem]">드라마 제목</span>
            <span>별점</span>
          </div>
          <div className="flex flex-col gap-[3px] text-[1.4rem]">
            <span>출연진</span>
            <span>제작년도</span>
            <span>시청가능 연령</span>
            <span>드라마 장르</span>
            <span>회차정보</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[4px]">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>

      <form className="relative flex flex-col gap-[4px] py-[10px] pl-[16px] pr-[50px] bg-slate-300">
        <input
          className="py-[3px] px-[5px]"
          type="text"
          placeholder="리뷰를 작성해 주세요."
        />
        <div className="flex gap-[2px]">별점</div>
        <button className="absolute top-1/2 -translate-y-1/2 right-[16px]">
          등록
        </button>
      </form>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
