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
    <div className="overflow-y-auto flex flex-col gap-[30px] px-[16px] pt-[50px] pb-[80px]">
      <div>
        <span className="font-b">{post.title}</span>
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
      <span>{post.contents}</span>

      <div className="flex flex-col gap-[4px]">
        {comments.map((comment) => (
          <CommentItem key={`${Math.random()}`} comment={comment} />
        ))}
      </div>

      <form
        className="relative flex flex-col gap-[4px] py-[10px] pl-[16px] pr-[50px] bg-slate-300"
        onSubmit={handleCommentSubmit}
      >
        <input
          className="py-[3px] px-[5px]"
          type="text"
          value={commentText}
          onChange={handleCommentText}
          placeholder="댓글을 작성해 주세요."
        />
        <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-[16px]"
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
