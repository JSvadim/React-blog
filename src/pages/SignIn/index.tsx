// hooks
import { useTypedSelector } from "../../hooks/useTypedSelector";

// local imports
import style from "./style.module.scss";
import { firstBlogExample, secondBlogExample } from "../../constants/blog-example";
import SignInForm from "../../components/forms/SignInForm";
import TwoPartsTitle from "../../components/TwoPartsTitle/index";
import Blog from "../../components/Blog/index";
import Container from "../../components/Container";


const SignInPage: React.FC = () => {

    const { language } = useTypedSelector(state => state.language);


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
                        blog={firstBlogExample[language]}
                        isFake={true}/>
                    <Blog
                        blog={secondBlogExample[language]}
                        isFake={true}/>
                </div>
            </div>
        </Container>
    )
}


export default SignInPage