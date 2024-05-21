import Link from "next/link";

export default function DramaItem() {
  return (
    <Link href={"/dramaDetail"}>
      <div className="flex flex-col gap-[8px] items-center">
        <div className="w-[100px] h-[140px] bg-slate-200"></div>
        <span>드라마 제목</span>
      </div>
    </Link>
  );
}
