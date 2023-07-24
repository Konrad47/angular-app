export interface PostApi {
  limit: number;
  posts: Post[];
  skip: number;
  total: number;
}

export interface Post {
  id?: number;
  title: string;
  body: string;
  userId?: number;
  tags?: string[];
  reactions?: number;
}
