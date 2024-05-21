import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomTabNav() {
  const router = useRouter();
  const MENU = [
    {
      label: "홈",
      imageOff: "/images/bottomTabNav/home_off_fill.svg",
      imageOn: "/images/bottomTabNav/home_on_fill.svg",
      paths: ["/drama"],
    },
    {
      label: "OTT추천",
      imageOff: "/images/bottomTabNav/ott_off_fill.svg",
      imageOn: "/images/bottomTabNav/ott_on_fill.svg",
      paths: ["/ott"],
    },
    {
      label: "커뮤니티",
      imageOff: "/images/bottomTabNav/community_off_fill.svg",
      imageOn: "/images/bottomTabNav/community_on_fill.svg",
      paths: ["/community"],
    },
    {
      label: "내정보",
      imageOff: "/images/bottomTabNav/user_off_fill.svg",
      imageOn: "/images/bottomTabNav/user_on_fill.svg",
      paths: ["/my"],
    },
  ];

  return (
    <div className="py-[10px] px-[20px] flex gap-[24px] justify-between bg-white border-t border-t-[#EFF1F4]">
      {MENU.map((v) => (
        <Link
          href={v.paths[0]}
          key={v.label}
          className="flex flex-col gap-[2px] items-center w-full cursor-pointer"
        >
          <Image
            alt={v.label}
            src={v.paths.includes(router.pathname) ? v.imageOn : v.imageOff}
            width={24}
            height={24}
            priority
            className="w-[24px] h-[24px]"
          />
          <span
            className={`font-[Pretendard-Medium] text-[1.2rem] ${
              v.paths.includes(router.pathname)
                ? "text-brand"
                : "text-[#9DA0A8]"
            }`}
          >
            {v.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
