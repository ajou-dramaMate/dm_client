import axiosInstance from "@api/axiosInstance";
import BottomTabNav from "@components/bottomTabNav";
import DramaItem from "@components/dramaItem";
import OttItem from "@components/ottItem";
import { useEffect, useState } from "react";
import { DRAMA_DATA } from "./drama";
import DramaRecommItem from "@components/dramaRecommItem";

export const MAX_SELECT_CNT = 3;
export const OTT_DATA = [
  {
    ott_image: "",
    price: "5900",
    // ott가 소유하고 있는 드라마 제목만 반환
    dramas: "drama1 title, drama2 title",
  },
];

export default function Ott() {
  const [dramaList, setDramaList] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [ottList, setOttList] = useState([]);

  const getDramaLike = async () => {
    try {
      // const res = await axiosInstance.get(`/api/api/v1/drama/like`);
      // console.log(`drama/like`, res);
      // setDramaList(res.data);
      setDramaList(DRAMA_DATA);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRecomm = async () => {
    if (selectedIds.length < 3) {
      alert("보고 싶은 드라마를 3개 선택해 주세요.");
      return;
    }
    try {
      // const res = await axiosInstance.get(
      //   `/api/api/v1/ott/${selectedIds[0]}/${selectedIds[1]}/${selectedIds[2]}`
      // );
      // console.log(`ott recomm`, res);
      // setOttList(res.data);
      setOttList(OTT_DATA);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDramaLike();
  }, []);

  return (
    <div className="overflow-y-auto flex flex-col gap-[16px] px-[16px] pt-[20px] pb-[80px]">
      <span>
        현재 {selectedIds.length}개 선택 / {MAX_SELECT_CNT}
      </span>
      <div className="grid grid-cols-3 justify-items-center gap-y-[16px]">
        {dramaList.map((v) => (
          <DramaRecommItem
            key={v.dramaId}
            item={v}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        ))}
      </div>
      <button
        className="py-[10px] px-[16px] bg-brand text-white disabled:bg-slate-300 disabled:text-black rounded-[10px]"
        onClick={handleRecomm}
      >
        OTT 추천받기
      </button>
      <div className="flex flex-col gap-[10px]">
        {ottList.map((v) => (
          <OttItem key={`${Math.random()}`} item={v} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
