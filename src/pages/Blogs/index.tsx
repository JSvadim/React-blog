// local imports
import classNames from "classnames";
import style from "./style.module.scss";
import { blogData } from "../../constants/blog-example";
import Blog from "../../components/Blog";

const BlogsPage: React.FC = () => {
    return (
        <div className={classNames([style.container, "container"])}>
            <h1 className={style.title}>
                <span className={style["title-small"]}>BEST blog</span>
                <span className={style["title-big"]}>EVER</span>
            </h1>
            <div className={style.content}>
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
                </ul>
                <ul className={style["pagination"]}>
                    <li className={style["pagination__item"]}>
                        <button className={style["pagination__button"]}>
                            1
                        </button>
                    </li>
                    <li className={classNames([style["pagination__item"], style["pagination__item--active"]])}>
                        <button className={style["pagination__button"]}>
                            2
                        </button>
                    </li>
                    <li className={style["pagination__item"]}>
                        <button className={style["pagination__button"]}>
                            3
                        </button>
                    </li>
                    <li className={style["pagination__item"]}>
                        <button className={style["pagination__button"]}>
                            4
                        </button>
                    </li>
                    <li className={style["pagination__item"]}>
                        <button className={style["pagination__button"]}>
                            5
                        </button>
                    </li>
                    <li className={style["pagination__item"]}>
                        <button className={classNames([style["pagination__button"], style["pagination__button--all"]])}>
                            ...
                        </button>
                    </li>
                    <li className={style["pagination__item"]}>
                        <button className={style["pagination__button"]}>
                            16
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default BlogsPage