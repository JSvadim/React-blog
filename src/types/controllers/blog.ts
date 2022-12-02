// local imports
import { AddBlogFormDataI } from "../../components/forms/AddBlogForm/type";

export interface AddBlogControllerI {
    data: AddBlogFormDataI
    setFormError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}