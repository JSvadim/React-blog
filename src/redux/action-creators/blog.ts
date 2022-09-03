// local imports
import { BlogI } from "../../types/blog/blog";
import { BlogActions } from "../types/blog";

export const addBlogCreator = (payload: BlogI) => ({
    type: BlogActions.add,
    payload
});
export const removeBlogCreator = () => ({
    type: BlogActions.remove,
});
