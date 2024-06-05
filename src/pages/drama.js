import axiosInstance from "@api/axiosInstance";
import BottomTabNav from "@components/bottomTabNav";
import DramaItem from "@components/dramaItem";
import { useEffect, useState } from "react";

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
  const [dramaList, setDramaList] = useState([]);

  const getDrama = async () => {
    try {
      // const res = await axiosInstance.get(`/api/api/v1/drama`);
      // console.log(`drama`, res);
      const res = await fetch(`/api/api/v1/drama`);
      const json = await res.json();
      console.log(`drama`, json);
      setDramaList(json.content);
      // setDramaList(DRAMA_DATA);
    } catch (e) {
      console.log(e);
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
        {dramaList.map((v) => (
          <DramaItem key={v.dramaId} item={v} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
