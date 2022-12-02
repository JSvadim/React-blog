// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { BlogResponseI } from "../types/server-responses/blog";

export class BlogService {

    static async addBlog(blogData: FormData): Promise<AxiosResponse<BlogResponseI>> {
        const addedBlog = await $api.post("/blog", blogData);
        return addedBlog;
    }

    static async getBlog(blogId: number): Promise<AxiosResponse<BlogResponseI>> {
        const blog = await $api.get("/blog", { params: { blogId } });
        return blog;
    }

    static async getBlogs( userId?: number): Promise<AxiosResponse<BlogResponseI[]>> {
        // if userId is undefined we get all blogs
        const blogs = await $api.get("/blog", { params: { userId } });
        return blogs;
    }

}