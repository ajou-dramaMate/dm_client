import Image from "next/image";
import BottomTabNav from "@components/bottomTabNav";
import ReviewItem from "@components/reviewItem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const GENRE_OPTION = {
  ROMANCE: "로맨스",
  MELO: "멜로",
  ACADEMY: "학원",
  OFFICE: "오피스",
  FAMILY: "가족",
  HISTORICAL: "사극",
  COMEDY: "코미디",
  FANTASY: "판타지",
  PERIOD: "시대극",
  GROWTH: "성장",
  MYSTERY: "미스터리",
  YOUTH: "청춘",
  DAILY: "일상",
  COURT: "법정",
  DRAMA: "드라마",
  MEDICAL: "메디컬",
  FRIENDSHIP: "우정",
  HORROR: "호러",
  HUMAN: "휴먼",
  THRILLER: "스릴러",
  SUSPENSE: "서스펜스",
  CAMPUS: "캠퍼스",
  PSYCHOLOGICAL: "심리",
  ACTION: "액션",
  POLITICAL: "정치",
  CRIME: "범죄",
  HEALING: "힐링",
  REVENGE: "복수",
  BLACK_COMEDY: "블랙 코미디",
  NOIR: "느와르",
  PICARESQUE: "피카레스크",
  SPY: "첩보",
  HARD_BOILED: "하드보일드",
  OMNIBUS: "옴니버스",
  SUPER_HERO: "슈퍼히어로",
  ENSEMBLE_CAST: "앙상블 캐스트",
};

export default function DramaDetail() {
  const router = useRouter();
  const { dramaId } = router.query;
  console.log(dramaId);
  const [detail, setDetail] = useState(null);

  const handleLike = async () => {
    try {
      // const res = await axiosInstance.post(`/api/api/v1/drama/like/${dramaId}`);
      // console.log(`drama like`, res);
      const res = await fetch(`/api/api/v1/drama/like/${dramaId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(`drama like`, res);
    } catch (e) {
      console.log(e);
    }
  };

  const convertGenreString = (arr) => {
    return arr.map((v) => GENRE_OPTION[v]).join(", ");
  };

  const getDramaDetail = async () => {
    try {
      const res = await fetch(`/api/api/v1/drama/${dramaId}`);
      const json = await res.json();
      console.log(`drama detail`, json);
      setDetail(json);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDramaDetail();
  }, []);

  return (
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pb-[80px]">
      <div className="py-[10px]">
        <Image
          alt="뒤로가기"
          src={require("@images/chevron_left-gray.svg")}
          width={24}
          height={24}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
      </div>

      <div className="flex gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <img
            alt="포스터"
            src={`data:image/png;base64,${detail?.image}`}
            className="w-[150px] h-[210px] bg-slate-200"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[4px]">
            <span className="font-b text-[1.8rem]">{detail?.title}</span>
            <span>별점 {detail?.star}</span>
          </div>
          <div className="flex flex-col gap-[3px] text-[1.4rem]">
            <span>출연진: {detail?.member}</span>
            <span>제작년도: {detail?.year}</span>
            <span>시청가능 연령: {detail?.age}</span>
            <span>드라마 장르: {convertGenreString(detail?.genre ?? [])}</span>
            <span>회차정보: {detail?.information}</span>
            <button type="button" onClick={handleLike}>
              찜
            </button>
          </div>
        </div>
      </div>
      <span className="text-justify">{detail?.summary}</span>

      <div className="flex flex-col gap-[4px]">
        {detail?.review.map((v) => (
          <ReviewItem key={`${Math.random()}`} item={v} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="bg-white pt-[8px] pb-[18px] px-[16px]">
          <button
            className="w-full bg-brand h-[43px] rounded-[10px] flex gap-[8px] items-center justify-center"
            onClick={() =>
              router.push({
                pathname: "/reviewWrite",
                query: { dramaId, title: detail?.title },
              })
            }
          >
            <Image
              alt=""
              src={require("@images/pencil-white.svg")}
              width={16}
              height={16}
              priority
            />
            <span className="text-white font-[Pretendard-SemiBold]">
              리뷰 쓰기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
