import axiosInstance from "@api/axiosInstance";
import BottomTabNav from "@components/bottomTabNav";
import DramaItem from "@components/dramaItem";
import useIntersect from "@hooks/useIntersect";
import { useEffect, useRef, useState } from "react";

export const DRAMA_DATA = [
  {
    dramaId: 0,
    title: "드라마1",
    image: "",
    like: true,
  },
  {
    dramaId: 1,
    title: "드라마2",
    image: "",
    like: false,
  },
  {
    dramaId: 2,
    title: "드라마3",
    image: "",
    like: false,
  },
  {
    dramaId: 3,
    title: "드라마4",
    image: "",
    like: false,
  },
  {
    dramaId: 4,
    title: "드라마5",
    image: "",
    like: true,
  },
];

export default function Drama() {
  const [loading, setLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const page = useRef(0);
  const [dramaList, setDramaList] = useState([]);

  const getDrama = async () => {
    try {
      setLoading(true);
      // const res = await axiosInstance.get(`/api/api/v1/drama`);
      // console.log(`drama`, res);
      const res = await fetch(`/api/api/v1/drama?page=${page.current}`);
      const json = await res.json();
      console.log(`drama`, json);
      setDramaList((prev) => [...prev, ...json.content]);
      if (json.content.length === 0) setIsLastPage(true);
      // setDramaList(DRAMA_DATA);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const putDramaData = async () => {
    const dramas = require("/public/json/drama.json");
    const promises = dramas.data.map(async (v) => {
      const {
        title,
        member,
        summary,
        year,
        age,
        information,
        image,
        genre,
        ott,
      } = v;
      return await fetch(`/api/api/v1/drama`, {
        method: "POST",
        body: JSON.stringify({
          title,
          member,
          summary,
          year,
          age,
          information,
          image,
          genre: genre.split(", "),
          ott: ott.split(", "),
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
    });
    await Promise.all(promises);
  };

  useEffect(() => {
    // putDramaData();
    getDrama();
  }, []);

  // useIntersect훅에 타겟 감지 시 실행해야할 콜백함수 전달
  const ref = useIntersect((entry, { threshold = 1 }) => {
    // 불러올 데이터가 더 이상 없는지 체크
    if (loading || isLastPage) return;
    page.current++;
    getDrama();
  });

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

      {dramaList.length ? (
        <div className="grid grid-cols-3 justify-items-center gap-y-[16px]">
          {dramaList.map((v) => (
            <DramaItem key={v.dramaId} item={v} />
          ))}
        </div>
      ) : (
        <div className="pt-[200px] flex justify-center items-center">
          <p className="leading-[3rem] text-[1.4rem] text-[#7F828C] text-center">
            아직 드라마 데이터가 없습니다.
          </p>
        </div>
      )}
      <div className={`w-full flex justify-center`} ref={ref}>
        {loading && (
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand"></div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
