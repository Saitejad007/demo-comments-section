import { CommentWithUser } from "@/utils/types";
import Image from "next/image";
import React from "react";

interface CommentProps {
  comment: CommentWithUser;
  onDelete: (id: number) => void;
  isEven: boolean;
}

const Comment: React.FC<CommentProps> = ({ comment, onDelete, isEven }) => {
  const handleDelete = () => {
    onDelete(comment.id);
  };

  return (
    <div className={`comment ${isEven ? "even" : "odd"}`}>
      <div className="comment-content">
        <Image
          src={comment.picture.thumbnail}
          width={50}
          height={50}
          alt="User"
        />
        <h3>
          {comment.name.title +
            " " +
            comment.name.first +
            " " +
            comment.name.last}
        </h3>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
