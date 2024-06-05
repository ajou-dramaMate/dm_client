import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ReviewWrite() {
  const router = useRouter();
  const { dramaId, title } = router.query;
  const [selectedStar, setSelectedStar] = useState(
    Array.from({ length: 5 }, () => false)
  );
  const [contents, setContents] = useState("");

  const handleSelectStar = (starIdx) => {
    const newArr = JSON.parse(JSON.stringify(selectedStar));
    for (let i = 0; i < 5; i++) {
      if (i <= starIdx) {
        newArr[i] = true;
      } else {
        newArr[i] = false;
      }
    }
    setSelectedStar(newArr);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/api/v1/review`, {
        method: "POST",
        body: JSON.stringify({
          dramaId: +dramaId,
          contents,
          star: selectedStar.filter((v) => v).length,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(`post review`, res);
      alert("리뷰가 등록되었습니다.");
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={`overflow-y-auto h-full px-[16px] pb-[18px] bg-[#EFF1F4]`}>
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

      <form onSubmit={onSubmit}>
        <div className="pt-[8px] flex flex-col gap-[12px]">
          <span className="text-[1.8rem] font-[Pretendard-SemiBold] pb-[4px]">
            {title}
          </span>

          <div className="bg-white h-[85px] rounded-[10px] px-[16px] flex flex-col gap-[8px] justify-center items-center text-[1.4rem] font-[Pretendard-Medium]">
            <span className="text-[#3B3F4A]">시청한 드라마는 어떠셨나요?</span>
            <div className="flex gap-[7px] items-center">
              {selectedStar.map((v, i) => (
                <Image
                  key={i}
                  alt="별점"
                  src={
                    v
                      ? require("@images/star_review-fill-brand.svg")
                      : require("@images/star_review-outline-gray.svg")
                  }
                  width={34}
                  height={34}
                  priority
                  onClick={() => handleSelectStar(i)}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[4px]">
            <textarea
              className="bg-white h-[190px] rounded-[10px] py-[12px] px-[14px] placeholder:text-[#9DA0A8]"
              placeholder={`시청한 드라마에 대한 리뷰를 남겨 주세요.${"\n"}(최소 10자)`}
              onChange={(e) => setContents(e.target.value)}
              value={contents}
            ></textarea>
            <span className="self-end text-[#5A5E6A] text-[1.2rem]">
              {contents.length} <span className="text-[#9DA0A8]">/500</span>
            </span>
          </div>
        </div>

        <button
          className="w-full mt-[29px] h-[43px] disabled:bg-[#9DA0A8] bg-brand rounded-[10px]"
          disabled={
            !selectedStar.filter((v) => v).length || contents.length < 10
          }
        >
          <span className="text-white font-[Pretendard-SemiBold]">
            등록하기
          </span>
        </button>
      </form>
    </div>
  );
}
