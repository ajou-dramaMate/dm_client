import axiosInstance from "@api/axiosInstance";
import BottomTabNav from "@components/bottomTabNav";
import DramaItem from "@components/dramaItem";
import { useEffect, useState } from "react";

export default function My() {
  const [dramaList, setDramaList] = useState([]);

  const getDramaLike = async () => {
    try {
      const res = await axiosInstance.get(`/api/api/v1/drama/like`);
      console.log(`drama like`, res);
      setDramaList(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDramaLike();
  }, []);
  return (
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pt-[50px] pb-[80px]">
      <span className="text-[1.8rem] font-b">00님 안녕하세요.</span>

      <div className="flex flex-col gap-[8px]">
        <span className="font-m">개인정보</span>
        <div className="flex flex-col gap-[4px] bg-slate-300 py-[10px] px-[16px]">
          <span>아이디: admin123</span>
          <span>닉네임: 00</span>
        </div>
        <button className="bg-slate-400 py-[5px] w-full rounded-[5px]">
          로그아웃
        </button>
      </div>

      <div className="flex flex-col gap-[8px]">
        <span className="font-m">나의 찜 목록</span>
        <div className="grid grid-cols-3 justify-items-center gap-y-[16px]">
          {dramaList.map((v) => (
            <DramaItem key={`${Math.random()}`} item={v} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
