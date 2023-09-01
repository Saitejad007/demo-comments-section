export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export type CommentWithUser = {
  id: number;
  name: {
    title: string;
    first: string;
    last: string;
  };
  body: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export type CommentsApiResponse = {
  data: Comment[];
  status: number;
  statusText: string;
  headers: any;
  config: any;
};

export type UserApiResponse = {
  data: any;
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};
