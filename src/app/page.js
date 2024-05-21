import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white flex flex-col justify-around items-center p-[42px]">
      <div className="flex flex-col gap-[12px]">
        <Image
          alt=""
          src={require("@images/logo.svg")}
          width={150}
          height={150}
          priority
        />
      </div>
      <div className="flex flex-col gap-[8px] items-center w-full">
        <div className="w-full flex flex-col gap-[18px] items-center">
          <button className="bg-[#FEE500] shadow-gray-sm w-full text-[1.4rem] font-m h-[42px] rounded-[5px] flex gap-[20px] items-center justify-center">
            <Image
              alt=""
              src={require("@images/kakao.svg")}
              width={24}
              height={24}
            />
            <span className="text-[#3B3F4A]">카카오로 로그인</span>
          </button>
          <Link href={"/drama"} className="w-full">
            <button className="bg-brand shadow-gray-sm w-full text-[1.4rem] font-m h-[42px] rounded-[5px] flex gap-[20px] items-center justify-center">
              {/* <Image
              alt=""
              src={require("@images/kakao.svg")}
              width={24}
              height={24}
            /> */}
              <span className="text-white">둘러보기</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
