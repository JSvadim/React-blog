// third party
import classNames from "classnames";
import { BlogForm } from "../../components/forms/BlogForm";

// local imports
import style from "./style.module.scss";


const AddBlogPage: React.FC = () => {
    return (
        <div className={classNames(["container", style.container])}>
            <h1 className={style.title}>
                add blog
            </h1>
            <BlogForm className={style["blog-form"]} requestURL="/blog/add"/>
        </div>
    )
}


export default AddBlogPage