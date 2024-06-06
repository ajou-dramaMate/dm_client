import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BottomTabNav from "@components/bottomTabNav";
import CommentItem from "@components/commentItem";

export default function PostDetail() {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentText = (event) => {
    setCommentText(event.target.value);
  };

  async function fetchPost() {
    const { communityId } = router.query;
    if (!communityId) return;

    try {
      const response = await fetch(`/api/api/v1/community/${communityId}`);
      const data = await response.json();
      console.log(data);
      setPost(data);
      setComments(data.comments);
      setComments(data.comments.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, [router.query.communityId]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const newComment = {
      communityId: +router.query.communityId,
      text: commentText,
    };

    try {
      const response = await fetch("/api/api/v1/comment", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      console.log(response);

      setComments((prevComments) => [...prevComments, newComment]);
      setCommentText("");
      fetchPost();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-y-auto flex flex-col gap-[20px] px-[16px] pb-[80px]">
      <div className="py-[10px]">
        <Image
          alt="뒤로가기"
          src={require("@images/chevron_left-gray.svg")}
          width={24}
          height={24}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between gap-[8px] items-center text-[1.4rem]">
          <span className="font-b text-[#3B3F4A]">{post.name}</span>
          <span className="text-[#9DA0A8] text-[1.3rem]">{post.date}</span>
        </div>
        <span className="font-b break-words">{post.title}</span>
        <span className="pb-[30px] break-words text-justify text-[#3B3F4A] text-[1.5rem]">
          {post.contents}
        </span>
      </div>

      <div className="flex flex-col gap-[4px]">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      <form
        className="relative flex flex-col gap-[4px] py-[10px] pl-[16px] pr-[50px] bg-brand rounded-[4px]"
        onSubmit={handleCommentSubmit}
      >
        <input
          className="py-[3px] px-[5px] rounded-[7px]"
          type="text"
          value={commentText}
          onChange={handleCommentText}
          placeholder="댓글을 작성해 주세요."
        />
        <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-[16px] bg-brand text-white py-[3px] px-[7px]"
          onChange={handleCommentSubmit}
          disabled={commentText.length === 0}
        >
          등록
        </button>
      </form>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <BottomTabNav />
      </div>
    </div>
  );
}
