import Link from "next/link";

export default function PostItem({ post }) {
  return (
    <Link href={`/postDetail?communityId=${post.communityId}`}>
      <div className="flex flex-col gap-[4px] bg-slate-200 rounded-[5px] py-[20px] px-[20px]">
        <span className="font-b break-words">{post.title}</span>
        <div className="flex gap-[7px] text-[1.4rem] font-m">
          <span>{post.name}</span>
          <span>{post.date}</span>
          {post.spoiler && <span>스포일러</span>}
        </div>
        {post.totalRecruit && (
          <div className="flex gap-[7px] text-[1.4rem] font-m">
            <span>{post.ott}</span>
            <span>
              {post.currentRecruit}/{post.totalRecruit}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
