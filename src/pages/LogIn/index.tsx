// third-party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { blogData } from "../../constants/blog-example";
import LogInForm from "../../components/forms/LogInForm/index";
import TwoPartsTitle from "../../components/TwoPartsTitle/index";
import Blog from "../../components/Blog/index";
import Container from "../../components/Container";


const LogInPage: React.FC = () => {
    return (
        <Container>
            <div className={style.wrapper}>
                <div className={style["title-wrapper"]}>
                    <TwoPartsTitle
                        bigPart="LOG"
                        smallPart="in"
                    />
                </div>
                <div className={style["form-wrapper"]}>
                    <LogInForm/>
                </div>
                <div className={style["example-posts"]}>
                    <Blog
                        id={1}
                        title={blogData.title}
                        text={blogData.text}
                        pictures={blogData.pics}
                        isFake={true}/>
                    <Blog
                        id={2}
                        title={blogData.title}
                        text={blogData.text}
                        pictures={null}
                        isFake={true}/>
                </div>
            </div>
        </Container>
    )
}


export default LogInPage