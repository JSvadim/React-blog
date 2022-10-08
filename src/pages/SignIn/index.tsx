// local imports
import style from "../LogIn/style.module.scss";
import { blogData } from "../../constants/blog-example";
import SignInForm from "../../components/forms/SignInForm";
import TwoPartsTitle from "../../components/TwoPartsTitle/index";
import Blog from "../../components/Blog/index";
import Container from "../../components/Container";


const SignInPage: React.FC = () => {
    return (
        <Container>
            <div className={style.wrapper}>
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
        </Container>
    )
}


export default SignInPage