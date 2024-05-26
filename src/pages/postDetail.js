import { useRouter } from "next/router";
import BottomTabNav from "@components/bottomTabNav";
import CommentItem from "@components/commentItem";

export default function PostDetail() {
  const router = useRouter();
  const { postType } = router.query;

  return (
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pt-[50px] pb-[80px]">
      <div>
        <span className="font-b">커뮤니티 글 제목</span>
        <div className="flex gap-[7px] text-[1.4rem] font-m">
          <span>작성자</span>
          <span>작성일</span>
          {postType === "chat" && <span>스포일러</span>}
        </div>
        {postType === "recruit" && (
          <div className="flex gap-[7px] text-[1.4rem] font-m">
            <span>OTT</span>
            <span>현재 모집 인원</span>
            <span>전체 모집 인원</span>
          </div>
        )}
      </div>
      <span>커뮤니티 글 내용</span>

      <div className="flex flex-col gap-[4px]">
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>

      <form className="relative flex flex-col gap-[4px] py-[10px] pl-[16px] pr-[50px] bg-slate-300">
        <input
          className="py-[3px] px-[5px]"
          type="text"
          placeholder="댓글을 작성해 주세요."
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-[16px]">
          등록
        </button>
      </form>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
