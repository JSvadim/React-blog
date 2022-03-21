import classNames from "classnames";

import style from "./style.module.scss";
import { blogData } from "../../constants/blog-example";
import LogInForm from "../../components/forms/LogInForm/index";


const LogInPage: React.FC = () => {
    return (
        <div className={classNames([style.container, 'container'])}>
            <h1 className={classNames([style.title, "unselectable"])}>
                <span className={style["desktop-title"]}>
                    LOG <br></br>in
                </span>
                <div className={style["two-parts-title"]}>
                    <span className={style["two-parts-title--big"]}>LOG</span>
                    <span className={style["two-parts-title--small"]}>in</span>
                </div>
            </h1>
            <div className={style["form-wrapper"]}>
                <LogInForm/>
            </div>
            <div className={style["example-posts"]}>
                <article className={classNames(["blog", "blog--with-pics", style.blog])} aria-hidden="true" tabIndex={-1}>
                    <div className="blog__title-wrapper">
                        <span className="blog__title-decor unselectable">“</span>
                        <h3 className="blog__title">{blogData.title}</h3>
                    </div>
                    <div className="blog__body">
                        <div className="blog__content">
                            <p className="blog__text">
                                {blogData.text}
                            </p>
                            <ul className="blog__pics">
                                {blogData.pics.map( (image, index) => {
                                    return (
                                        <li className="blog__pics-item" key={index}>
                                            <img className="liquid-pic" src={blogData.pics[index]}></img>
                                        </li>
                                    )
                                })}
                            </ul>
                            <span className="blog__read-all-link unselectable">read all blog...</span>
                        </div>
                    </div>
                </article>
                <article className={classNames(["blog", style.blog])} aria-hidden="true" tabIndex={-1}>
                    <div className="blog__title-wrapper">
                        <span className="blog__title-decor unselectable">“</span>
                        <h3 className="blog__title">{blogData.title}</h3>
                    </div>
                    <div className="blog__body">
                        <div className="blog__content">
                            <p className="blog__text">
                                {blogData.text}
                            </p>
                            <span className="blog__read-all-link unselectable">read all blog...</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}


export default LogInPage