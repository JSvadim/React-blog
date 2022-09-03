import { BlogI } from "../../types/blog/blog";


export interface BlogStateI {
    blog: BlogI | null;
}

export enum BlogActions {
    add = "BLOG_ADDING",
    remove = "BLOG_REMOVING",
}

interface BlogAddingActionI {
    type: BlogActions.add;
    payload: BlogI;
}

interface BlogRemovingActionI {
    type: BlogActions.remove;
}

export type BlogAction = BlogAddingActionI | BlogRemovingActionI;