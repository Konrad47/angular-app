import { Post, PostApi } from 'src/app/core/posts/shared/post.model';

export interface PostStateInterface {
  isLoading: boolean;
  posts: PostApi;
  post: Post;
  error: string | null;
}
