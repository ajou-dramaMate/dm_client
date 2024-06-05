import Image from "next/image";

export default function ReviewItem({ item }) {
  return (
    <div className="flex flex-col gap-[8px] text-[1.4rem] bg-[#2d1f720d] py-[10px] px-[16px]">
      <div className="flex gap-[8px] items-center justify-between">
        <span className="font-b text-[#3B3F4A]">{item.name}</span>
        <span className="text-[#9DA0A8] text-[1.3rem]">{item.date}</span>
      </div>

      <div className="flex gap-[6px] items-center">
        <div className="flex gap-[4px] items-center">
          {Array.from({ length: Math.round(item.star) }).map((_, i) => (
            <Image
              key={i}
              alt=""
              src={require("@images/star-orange.svg")}
              width={16}
              height={15}
            />
          ))}
          {Array.from({ length: 5 - Math.round(item.star) }).map((_, i) => (
            <Image
              key={5 - i}
              alt=""
              src={require("@images/star-gray.svg")}
              width={16}
              height={15}
            />
          ))}
        </div>
        <span className="font-m text-[#FF823C]">{item.star}</span>
      </div>

      <p className="text-[#3B3F4A]">{item.contents}</p>
    </div>
  );
}
