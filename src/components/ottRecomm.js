import Image from "next/image";
import { useEffect, useState } from "react";
import OttItem from "@components/ottItem";
import BottomTabNav from "@components/bottomTabNav";

export default function OttRecomm({
  dramaId1,
  dramaId2,
  dramaId3,
  setIsShowModal,
}) {
  const [loadingRecomm, setLoadingRecomm] = useState(true);
  const [ottList, setOttList] = useState([]);

  const handleRecomm = async () => {
    try {
      //   setLoadingRecomm(true);
      const res = await fetch(
        `/api/api/v1/ott/${dramaId1}/${dramaId2}/${dramaId3}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log(`ott recomm`, res);
      const json = await res.json();
      setOttList(json);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingRecomm(false);
    }
  };

  useEffect(() => {
    handleRecomm();
  }, []);

  return (
    <div className="h-full overflow-y-auto flex flex-col gap-[20px] px-[16px] pb-[80px] bg-[#EFF1F4]">
      <div className="py-[10px]">
        <Image
          alt="뒤로가기"
          src={require("@images/chevron_left-gray.svg")}
          width={24}
          height={24}
          onClick={() => setIsShowModal(false)}
          className="cursor-pointer"
        />
      </div>

      {loadingRecomm ? (
        <div className="w-full pt-[250px] flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand" />
        </div>
      ) : (
        <div className="flex flex-col gap-[10px] bg-white rounded-[10px] p-[16px]">
          {ottList.map((v) => (
            <OttItem key={`${Math.random()}`} item={v} />
          ))}
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
