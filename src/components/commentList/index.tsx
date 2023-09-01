import React from "react";
import Comment from "../comment";
import { CommentWithUser } from "@/utils/types";

interface CommentListProps {
  comments: CommentWithUser[];
  onDelete: (id: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onDelete }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={onDelete}
          isEven={(index + 1) % 2 === 0}
        />
      ))}
    </div>
  );
};

export default CommentList;
