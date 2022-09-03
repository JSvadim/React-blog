// local imports
import { UserI } from "../auth/user";
import { BlogFormDataI } from "./blog";

export interface AddBlogControllerI {
    data: BlogFormDataI;
    setFormError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}