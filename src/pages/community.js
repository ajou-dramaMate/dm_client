import { useState, useEffect } from "react";
import BottomTabNav from "@components/bottomTabNav";
import PostItem from "@components/postItem";
import Link from "next/link";

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [communityButton, setCommunityButton] = useState(true);
  const [recruitButton, setRecruitButton] = useState(true);

  const handleCommunityButton = () => {
    if (recruitButton && !communityButton) {
      setCommunityButton(true);
    } else {
      setRecruitButton(!recruitButton);
    }
  };
  
  const handleRecruitButton = () => {
    if (!recruitButton && communityButton) {
      setRecruitButton(true);
    } else {
      setCommunityButton(!communityButton);
    }
  };

  async function fetchPosts() {
    try {
      const response = await fetch("/api/api/v1/community");
      const data = await response.json();
      console.log(data);
      setPosts(data);
      setPosts(data.sort((a, b) => b.communityId - a.communityId));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pt-[50px] pb-[80px]">
      <div className="flex gap-[16px]">
        <button
          className={`${
            communityButton ? "bg-brand" : "bg-slate-300"
          } text-white rounded-[10px] py-[10px] px-[16px]`}
          onClick={handleCommunityButton}
        >
          커뮤니티
        </button>
        <button
          className={`${
            recruitButton ? "bg-brand" : "bg-slate-300"
          } text-white rounded-[10px] py-[10px] px-[16px]`}
          onClick={handleRecruitButton}
        >
          모집
        </button>
        <Link
          href={"/newPost"}
          className="bg-brand text-white rounded-[10px] py-[10px] px-[16px] ml-auto"
        >
          글 등록
        </Link>
      </div>

      <div className="flex flex-col gap-[7px] pt-[20px]">
        {posts.filter(post => {
          if (communityButton && recruitButton) {
            return true;
          }
          else if (communityButton) {
            return !post.totalRecruit;
          }
          else if (recruitButton) {
            return post.totalRecruit;
          }
        }).map((post) => (
          <PostItem key={post.communityId} post={post} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
