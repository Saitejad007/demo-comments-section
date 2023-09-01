import { CommentsApiResponse, UserApiResponse } from "@/utils/types";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const commentsResponse: CommentsApiResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_COMMENTS_URI}/comments`
    );

    const usersResponse: UserApiResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_USERS_URI}/?results=50`
    );

    const comments = commentsResponse.data.slice(0, 50);
    const users = usersResponse.data.results;

    res.status(200).json({ comments, users });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Unable to fetch data" });
  }
}
