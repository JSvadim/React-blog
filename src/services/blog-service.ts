// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { BlogFormDataI, BlogI } from "../types/blog/blog";

export class BlogService {

    static async addBlog(blogData: FormData): Promise<AxiosResponse<BlogI>> {
        const addedBlog = await $api.post("/blog/add", blogData);
        return addedBlog;
    }
    
}