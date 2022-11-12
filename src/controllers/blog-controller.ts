// local imports
import { BlogService } from "../services/blog-service";
import { AddBlogControllerI } from "../types/blog/controller";


class BlogController {
    async addBlog(params: AddBlogControllerI) {
        const {data, setLoading, setFormError} = params;
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("text", data.text);
        formData.append("first-pic", data["first-pic"] as Blob);
        formData.append("second-pic", data["second-pic"] as Blob);
        formData.append("third-pic", data["third-pic"] as Blob);
        formData.append("fourth-pic", data["fourth-pic"] as Blob);
        formData.append("fifth-pic", data["fifth-pic"] as Blob);

        try {
            setLoading(true);
            const addedBlog = await BlogService.addBlog(formData);
            setLoading(false);
            return addedBlog.data;
        } catch(e: any) {
            console.log(e);
            setLoading(false);

            if(e.response.data.message) {
              setFormError(e.response.data.message);
              return 
            }

            return setFormError("unknown error");
        }
    }
}

export default new BlogController();