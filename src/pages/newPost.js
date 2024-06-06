import Image from "next/image";
import BottomTabNav from "@components/bottomTabNav";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NewPost() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [spoiler, setSpoiler] = useState(false);
  const handleSpoilerCheckBox = (event) => {
    setSpoiler(event.target.checked);
  };

  const [recruit, setRecruit] = useState(false);
  const handleRecruitCheckBox = (event) => {
    setRecruit(event.target.checked);
  };

  const [ottCheckbox, setOttCheckbox] = useState(null);
  const handleOttCheckbox = (index) => {
    setOttCheckbox(index);
  };

  const [toggleOpen, setToggleOpen] = useState(false);
  const toggleDropdown = () => {
    setToggleOpen(!toggleOpen);
  };

  const numbers = [2, 3, 4];
  const [selecteNumber, setSelecteNumber] = useState(null);
  const handleNumberSelect = (number) => {
    setSelecteNumber(number);
    setToggleOpen(false);
  };

  const checkboxes = [
    "NETFLIX",
    "DISNEYPLUS",
    "WAVVE",
    "WATCHA",
    "TVING",
    "UPLUS",
    "COUPANGPLAY",
  ];

  const [content, setContent] = useState("");
  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      title: title,
      spoiler: spoiler,
      ott: checkboxes[ottCheckbox],
      totalRecruit: selecteNumber,
      contents: content,
    };

    try {
      const response = await fetch("/api/api/v1/community", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      console.log(response);
      if (response.ok) {
        router.push("/community");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-y-auto flex flex-col gap-[20px] px-[16px] pb-[80px]">
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

      <form className="flex flex-col gap-[30px] px-[16px]">
        <div className="flex justify-end">
          <button
            className="bg-brand text-white rounded-[10px] py-[10px] px-[16px] disabled:bg-slate-300"
            disabled={
              content.length === 0 ||
              title === 0 ||
              (recruit && (!ottCheckbox || !selecteNumber))
            }
            onClick={handleSubmit}
          >
            등록
          </button>
        </div>

        <input
          className="py-[3px] px-[5px] border border-gray-300 rounded"
          type="text"
          value={title}
          onChange={handleTitle}
          placeholder="제목을 작성해 주세요."
        />
        <label className="flex items-center gap-[8px]">
          <span>스포일러</span>
          <input
            type="checkbox"
            checked={spoiler}
            onChange={handleSpoilerCheckBox}
          />
        </label>
        <label className="flex items-center gap-[8px]">
          <span>모집 여부</span>
          <input
            type="checkbox"
            checked={recruit}
            onChange={handleRecruitCheckBox}
          />
        </label>
        {recruit && (
          <div className="flex flex-col gap-[10px] rounded-[10px] bg-slate-200 py-[25px] px-[20px]">
            <div>
              <span>OTT 이름</span>
              <ul className="p-[16px] list-disc">
                {checkboxes.map((label, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center gap-[4px] border-b border-gray-400 py-[8px]"
                  >
                    <span>{label}</span>
                    <input
                      type="checkbox"
                      checked={ottCheckbox === index}
                      onChange={() => handleOttCheckbox(index)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <span>모집 인원</span>
              <button
                type="button"
                onClick={toggleDropdown}
                className="mt-[5px] p-[16px] bg-white border border-gray-300 rounded-[5px] flex items-center justify-between w-full"
              >
                {selecteNumber ? `${selecteNumber} 명` : "인원을 정해 주세요"}
                <span className="ml-2">{toggleOpen ? "▲" : "▼"}</span>
              </button>
              {toggleOpen && (
                <ul className="absolute w-full bg-white rounded-[5px] border border-gray-300">
                  {numbers.map((number) => (
                    <li
                      key={number}
                      onClick={() => handleNumberSelect(number)}
                      className="py-[6px] px-[8px] hover:bg-gray-100 cursor-pointer"
                    >
                      {number} 명
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
        <div>
          <textarea
            className="w-full h-[200px] p-[10px] border border-gray-300 rounded"
            value={content}
            onChange={handleContent}
            placeholder="글을 입력해주세요."
          />
        </div>
      </form>
      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
