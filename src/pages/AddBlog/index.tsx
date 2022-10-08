// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import Container from "../../components/Container";
import { BlogForm } from "../../components/forms/BlogForm";


const AddBlogPage: React.FC = () => {
    return (
        <Container>
            <div className={style.wrapper}>
                <h1 className={style.title}>
                    add blog
                </h1>
                <BlogForm className={style["blog-form"]} requestURL="/blog/add"/>
            </div>
        </Container>
    )
}


export default AddBlogPage