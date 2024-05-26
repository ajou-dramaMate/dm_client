import BottomTabNav from "@components/bottomTabNav";
import PostItem from "@components/postItem";

export default function Community() {
  return (
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pt-[50px] pb-[80px]">
      <div className="flex gap-[16px]">
        <button className="bg-brand text-white rounded-[10px] py-[10px] px-[16px]">
          커뮤니티
        </button>
        <button className="bg-brand text-white rounded-[10px] py-[10px] px-[16px]">
          모집
        </button>
        <button className="bg-brand text-white rounded-[10px] py-[10px] px-[16px] ml-auto">
          글 등록
        </button>
      </div>

      <div className="flex flex-col gap-[7px] pt-[20px]">
        <PostItem postType="chat" />
        <PostItem postType="chat" />
        <PostItem postType="recruit" />
        <PostItem postType="chat" />
        <PostItem postType="recruit" />
        <PostItem postType="recruit" />
        <PostItem postType="chat" />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
