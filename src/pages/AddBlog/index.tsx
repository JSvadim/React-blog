// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import Container from "../../components/Container";
import { AddBlogForm } from "../../components/forms/AddBlogForm";


const AddBlogPage: React.FC = () => {
    return (
        <Container>
            <div className={style.wrapper}>
                <h1 className={classNames([style.title, "unselectable"])}>
                    add blog
                </h1>
                <AddBlogForm className={style["blog-form"]}/>
            </div>
        </Container>
    )
}


export default AddBlogPage