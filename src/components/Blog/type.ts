// local imports
import { BlogResponseI } from "../../types/server-responses/blog";

export interface BlogComponentI {
    blog: BlogResponseI;
    isFake: boolean;
}