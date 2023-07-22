import { AuthStateInterface } from '../store/authorization/auth.module';
import { PostStateInterface } from '../store/post/post.module';

export interface AppStateInterface {
  posts: PostStateInterface;
  auth: AuthStateInterface;
}
