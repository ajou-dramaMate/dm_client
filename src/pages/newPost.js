import BottomTabNav from "@components/bottomTabNav";
import { useState } from "react";

export default function newPost() {
  const [isRecruit, setIsRecruit] = useState(false);
  const recruitCheckBoxChanged = (event) => {
    setIsRecruit(event.target.checked);
  };

  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const handleCheckboxChange = (index) => {
    setSelectedCheckbox(index);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const numbers = [2, 3, 4];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    setIsOpen(false);
  };

  const checkboxes = [
    "Netflix",
    "티빙",
    "Disney+",
    "왓챠",
    "웨이브",
    "Apple TV",
    "쿠팡플레이",
  ];

  return (
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pt-[50px] pb-[80px]">
      <form className="flex flex-col gap-[30px] px-[16px]">
        <div className="flex justify-end">
          <button className="bg-brand text-white rounded-[10px] py-[10px] px-[16px]">
            등록
          </button>
        </div>

        <input
          className="py-[3px] px-[5px] border border-gray-300 rounded"
          type="text"
          placeholder="제목을 작성해 주세요."
        />
        <label className="flex items-center gap-[8px]">
          <span>스포일러</span>
          <input type="checkbox" />
        </label>
        <label className="flex items-center gap-[8px]">
          <span>모집 여부</span>
          <input
            type="checkbox"
            checked={isRecruit}
            onChange={recruitCheckBoxChanged}
          />
        </label>
        {isRecruit && (
          <div className="flex flex-col gap-[8px] bg-slate-300 py-[10px] px-[16px]">
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
                      checked={selectedCheckbox === index}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span>모집 인원</span>
              <button
                type="button"
                onClick={toggleDropdown}
                className="py-[3px] px-[5px]"
              >
                {`: ${selectedNumber ? `${selectedNumber} 명` : "인원을 정해 주세요"}`}
                <span>{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <ul className="mt-[4px] pl-[16px] list-disc">
                  {numbers.map((number) => (
                    <li
                      key={number}
                      onClick={() => handleNumberSelect(number)}
                      className="cursor-pointer"
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
