import Link from "next/link";

export default function PostItem({ post }) {
  return (
    <Link href={`/postDetail?communityId=${post.communityId}`}>
      <div className="flex flex-col gap-[8px] text-[1.4rem] bg-[#2d1f720d] py-[10px] px-[16px]">
        <div className="flex gap-[8px] items-center justify-between">
          <span>{post.name}</span>

          <div className="flex gap-[8px] items-center text-[#3B3F4A] text-[1.3rem]">
            <div className="flex gap-[4px] items-center">
              {post.spoiler && (
                <span className="text-[#FF823C]">스포일러 포함</span>
              )}
              {post.totalRecruit ? (
                <div className="flex gap-[4px] items-center font-m">
                  <span>{post.ott}</span>
                  <span>
                    {post.currentRecruit === 2 ? 0 : post.currentRecruit}/
                    {post.totalRecruit}
                  </span>
                </div>
              ) : null}
            </div>
            <span className="text-[#9DA0A8]">{post.date}</span>
          </div>
        </div>
        <span className="font-b break-words">{post.title}</span>
      </div>
    </Link>
  );
}
