import CommentList from "@/components/commentList";
import SearchBox from "@/components/searchBox";
import { Comment, CommentWithUser, User } from "@/utils/types";
import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";

const getModifiedData = (comments: Comment[], users: User[]) => {
  const data = comments.map((comment: any, index: number) => {
    const { name, picture } = users[index];
    return { body: comment.body, name, picture, id: comment.id };
  });
  return data;
};

interface HomeProps {
  comments: Comment[];
  users: User[];
}

const Home = ({ comments: initialComments, users }: HomeProps) => {
  const [comments, setComments] = useState(
    getModifiedData(initialComments, users)
  );
  const [filteredComments, setFilteredComments] = useState(comments);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredComments(comments);
    } else {
      const filtered = comments.filter((comment: CommentWithUser) => {
        const { name } = comment;
        const { title, first, last } = name;

        const fullName = `name: { title: '${title}', first: '${first}', last: '${last}' }`;

        return fullName.toLowerCase().includes(query.toLowerCase());
      });

      setFilteredComments(filtered);
    }
  };

  const handleDelete = (id: number) => {
    const updatedComments = comments.filter(
      (comment: CommentWithUser) => comment.id !== id
    );
    setComments(updatedComments);
    setFilteredComments(updatedComments);
  };

  return (
    <main>
      <h1>Comments Section</h1>
      <p className="info">
        This is a demo app to show how to use the comments section of the
        my-comment-app <br />
        You can only see the first 50 comments
      </p>
      <SearchBox onSearch={handleSearch} />
      <CommentList comments={filteredComments} onDelete={handleDelete} />
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const commentsResponse: AxiosResponse = await axios(
      `${process.env.NEXT_PUBLIC_HOST}/api/comments`
    );
    const { comments, users } = commentsResponse.data;

    return {
      props: {
        comments,
        users,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        comments: [],
        users: [],
      },
    };
  }
}
