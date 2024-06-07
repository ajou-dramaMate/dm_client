import { useState, useEffect } from "react";
import BottomTabNav from "@components/bottomTabNav";
import PostItem from "@components/postItem";
import Link from "next/link";

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  const handleCommunityButton = () => {
    if (filterOption === "community") {
      setFilterOption("all");
    } else {
      setFilterOption("community");
    }
  };

  const handleRecruitButton = () => {
    if (filterOption === "recruit") {
      setFilterOption("all");
    } else {
      setFilterOption("recruit");
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
            filterOption === "community" ? "bg-brand" : "bg-slate-300"
          } text-white rounded-[10px] py-[10px] px-[16px]`}
          onClick={handleCommunityButton}
        >
          커뮤니티
        </button>
        <button
          className={`${
            filterOption === "recruit" ? "bg-brand" : "bg-slate-300"
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
        {posts
          .filter((post) => {
            if (filterOption === "all") {
              return true;
            } else if (filterOption === "community") {
              return !post.totalRecruit;
            } else if (filterOption === "recruit") {
              return post.totalRecruit;
            }
          })
          .map((post) => (
            <PostItem key={post.communityId} post={post} />
          ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
