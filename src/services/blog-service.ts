// third-party
import { AxiosResponse } from "axios";

// local imports
import { $api } from "../http/index";
import { BlogFormDataI, BlogI } from "../types/blog/blog";

export class BlogService {

    static async addBlog(blogData: BlogFormDataI): Promise<AxiosResponse<BlogI>> {
        const formData = new FormData();
        formData.append("title", blogData.title);
        formData.append("text", blogData.text);
        if(blogData.pictures) {
            const imagesArray = Array.from(blogData.pictures);
            for (let i = 0; i < 5; i++) {
                const pic = imagesArray[i];
                formData.append('pictures', pic)
            }
        }
        
        const addedBlog = await $api.post("/blog/add", formData);
        return addedBlog;
    }

}