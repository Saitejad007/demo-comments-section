import { CommentsApiResponse, UserApiResponse } from "@/utils/types";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const commentsResponse: CommentsApiResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const usersResponse: UserApiResponse = await axios.get(
      "https://randomuser.me/api/?results=50"
    );

    const comments = commentsResponse.data.slice(0, 50);
    const users = usersResponse.data.results;

    res.status(200).json({ comments, users });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Unable to fetch data" });
  }
}
