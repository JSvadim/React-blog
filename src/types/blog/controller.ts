// local imports
import { BlogI } from "./blog";

export interface AddBlogControllerI {
    data: BlogI;
    setFormError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    files: File[] | null;
}