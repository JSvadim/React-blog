// local imports
import { BlogResponseI } from "../../types/server-responses/blog";


export interface BlogsListComponentI {
    blogs: BlogResponseI[];
    listClassName?: string;
    itemClassName?: string;
}