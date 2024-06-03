"use client";
import Image from "next/image";
import Link from "next/link";
import axiosInstance from "@api/axiosInstance";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLoginTest = async () => {
    try {
      // const res = await axiosInstance.get(`/api/api/v1/login/test-login`);
      // console.log(`test-login`, res);
      const res = await fetch(`/api/api/v1/login/test-login`);
      const json = await res.json();
      console.log(`test-login`, json);
      const { accessToken, refreshToken } = json;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      alert("로그인에 성공하였습니다!");
      router.push("/drama");
    } catch (e) {
      console.log(e);
    }
  };

  const handleLoginKakao = async () => {
    try {
      const res = await axiosInstance.get(`/api/api/v1/login`);
      console.log(`login`, res);
      // const { accessToken, refreshToken } = res.data;
      // localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("refreshToken", refreshToken);
      // alert("로그인에 성공하였습니다!");
    } catch (e) {
      console.log(e);
    }
  };

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
          <button
            className="bg-slate-200 shadow-gray-sm w-full text-[1.4rem] font-m h-[42px] rounded-[5px] flex gap-[20px] items-center justify-center"
            onClick={handleLoginTest}
          >
            {/* <Image
              alt=""
              src={require("@images/kakao.svg")}
              width={24}
              height={24}
            /> */}
            <span className="text-brand">로그인하기</span>
          </button>
          <button
            className="bg-[#FEE500] shadow-gray-sm w-full text-[1.4rem] font-m h-[42px] rounded-[5px] flex gap-[20px] items-center justify-center"
            onClick={handleLoginKakao}
          >
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
