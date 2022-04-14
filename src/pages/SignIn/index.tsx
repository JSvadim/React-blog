// third-party
import classNames from "classnames";

// local imports
import style from "../LogIn/style.module.scss";
import { blogData } from "../../constants/blog-example";
import SignInForm from "../../components/forms/SignInForm";
import TwoPartsTitle from "../../components/TwoPartsTitle/index";
import Blog from "../../components/Blog/index";


const SignInPage: React.FC = () => {
    return (
        <div className={classNames([style.container, 'container'])}>
            <div className={style["title-wrapper"]}>
                <TwoPartsTitle
                    bigPart="SIGN"
                    smallPart="in"
                />
            </div>
            <div className={style["form-wrapper"]}>
                <SignInForm/>
            </div>
            <div className={style["example-posts"]}>
                <Blog
                    title={blogData.title}
                    text={blogData.text}
                    pics={blogData.pics}
                    isFake={true}/>
                <Blog
                    title={blogData.title}
                    text={blogData.text}
                    isFake={true}/>
            </div>
        </div>
    )
}


export default SignInPage