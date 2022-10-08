// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { blogData } from "../../constants/blog-example";
import Blog from "../../components/Blog";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";

const BlogsPage: React.FC = () => {
    return (
        <Container>
            <div className={style.wrapper}>
                <h1 className={style.title}>
                    <span className={style["title-small"]}>BEST blog</span>
                    <span className={style["title-big"]}>EVER</span>
                </h1>
                <ul className={style.blogs}>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            pics={blogData.pics}
                            isFake={true}/>
                    </li>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            isFake={true}/>
                    </li>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            isFake={true}/>
                    </li>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            pics={blogData.pics}
                            isFake={true}/>
                    </li>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            pics={blogData.pics}
                            isFake={true}/>
                    </li>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            isFake={true}/>
                    </li>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            pics={blogData.pics}
                            isFake={true}/>
                    </li>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            pics={blogData.pics}
                            isFake={true}/>
                    </li>
                    <li className={style.blog}>
                        <Blog
                            title={blogData.title}
                            text={blogData.text}
                            isFake={true}/>
                    </li>
                </ul>
                <Pagination className={style.pagination}/>
            </div>
        </Container>
    )
}


export default BlogsPage