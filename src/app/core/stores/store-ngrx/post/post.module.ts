import { Post, PostApi } from 'src/app/core/models/post.model';

export interface PostStateInterface {
  isLoading: boolean;
  posts: PostApi;
  post: Post;
  error: string | null;
}
