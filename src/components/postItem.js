import Link from "next/link";
import PropTypes from "prop-types";

export default function PostItem({ postType }) {
  return (
    <Link href={"/postDetail?postType=" + postType}>
      <div className="flex flex-col gap-[4px] bg-slate-200 rounded-[5px] py-[20px] px-[20px]">
        <span className="font-b">
          커뮤니티 글 제목
        </span>
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
    </Link>
  );
}

PostItem.propTypes = {
  postType: PropTypes.oneOf(["chat", "recruit"]).isRequired,
};
