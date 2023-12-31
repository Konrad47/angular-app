export interface CommentApi {
  limit: number;
  comments: Comment[];
  skip: number;
  total: number;
}

export interface Comment {
  id?: number;
  body: string;
  postId?: number;
  user: UserComment;
}

export interface UserComment {
  id?: number;
  username: string;
}
