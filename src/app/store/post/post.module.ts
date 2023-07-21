import { Post, PostApi } from 'src/app/models/Post';

export interface PostStateInterface {
  isLoading: boolean;
  posts: PostApi;
  error: string | null;
}
