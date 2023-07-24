import { AuthStateInterface } from './authorization/auth.module';
import { PostStateInterface } from './post/post.module';

export interface AppStateInterface {
  posts: PostStateInterface;
  auth: AuthStateInterface;
}
