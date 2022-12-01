// third-party
import classNames from "classnames";
import { Link } from "react-router-dom";

// local imports
import style from "./style.module.scss";
import { blogI } from "./type";
import PicturesList from "../PicturesList";




const Blog: React.FC<blogI> = (props) => {

    const fakeLink = <span className={classNames([style["read-all-link"], "unselectable"])}>read all blog...</span>;
    const trueLink = (
        <Link className={style["read-all-link"]} to="/blog" state={{ blogId: props.id }}>
            read all blog...
        </Link>
    );
    const title = props.isFake ? 
        (<h3 className={classNames([style.title, style["title-link"]])}>
            {props.title}
        </h3>) :
        (<h3 className={style.title}>
            <Link className={style["title-link"]} to="/blog" state={{ blogId: props.id }}>
                {props.title}
            </Link>
        </h3>);

    const blogClass = props.pictures ? classNames([style.blog, style["blog--with-pics"]]) : style.blog;
    const titleDecorClass = classNames(["unselectable", style["title-decor"]])

    
    return (
        <article 
            className={blogClass} 
            aria-hidden={props.isFake ? "true" : "false"}>
            <div className={style["title-wrapper"]}>
                <span className={titleDecorClass}>“</span>
                {title}
            </div>
            <div className={style.body}>
                <div className={style.content}>
                    <p className={style.text}> {props.text} </p>
                    { props.pictures && 
                        <PicturesList 
                            pictures = {props.pictures} 
                            listClassName={style.pics}
                            itemClassName={style["pics-item"]}
                            pictureClassName={style["pics-image"]}
                            isFake={props.isFake}
                            isCompressed={true}/> }
                    { props.isFake ? fakeLink : trueLink }
                </div>
            </div>
        </article>
    )
}


export default Blog