// local imports
import { BlogService } from "../services/blog-service";
import { AddBlogControllerI } from "../types/blog/controller";


class BlogController {
    async addBlog(params: AddBlogControllerI) {
        const {data, setLoading, setFormError} = params;
        try {
            setLoading(true);
            const addedBlog = await BlogService.addBlog(data);
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