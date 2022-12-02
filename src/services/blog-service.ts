// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { BlogI } from "../types/blog/blog";

export class BlogService {

    static async addBlog(blogData: FormData): Promise<AxiosResponse<BlogI>> {
        const addedBlog = await $api.post("/blog", blogData);
        return addedBlog;
    }

    static async getBlog(blogId: number): Promise<AxiosResponse<BlogI>> {
        const blog = await $api.get("/blog", { params: { blogId } });
        return blog;
    }

    static async getBlogs( userId?: number): Promise<AxiosResponse<BlogI[]>> {
        // if userId is undefined we get all blogs
        const blogs = await $api.get("/blog", { params: { userId } });
        return blogs;
    }

}