import { IPost } from "../model/Post";

export type IRequestCreatePostApi = Pick<IPost, 'body' | 'title' | 'userId'>;