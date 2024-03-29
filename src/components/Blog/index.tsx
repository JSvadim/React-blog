// hooks
import { useTypedSelector } from "../../hooks/useTypedSelector";

// third-party
import classNames from "classnames";
import { Link } from "react-router-dom";

// local imports
import style from "./style.module.scss";
import { BlogComponentI } from "./type";
import PicturesList from "../PicturesList";
import { User } from "../User";
import { blogVocabulary } from "../../vocabulary/components/Blog";


const Blog: React.FC<BlogComponentI> = (props) => {

    const { language } = useTypedSelector(state => state.language);
    const { blog, isFake } = props;

    const fakeLink = <span className={classNames([style["read-all-link"], "unselectable"])}>
        {blogVocabulary.readAllLink[language]}
    </span>;
    const trueLink = (
        <Link className={classNames([style["read-all-link"], "unselectable"])} to="/blog" state={{ blog }}>
            {blogVocabulary.readAllLink[language]}
        </Link>
    );
    const title = props.isFake ? 
        (<h3 className={classNames([style.title, style["title-link"], "unselectable"])}>
            {blog.title}
        </h3>) :
        (<h3 className={style.title}>
            <Link className={classNames([style["title-link"], "unselectable"])} to="/blog" state={{ blog }}>
                {blog.title}
            </Link>
        </h3>);

    const blogClass = blog.pictures ? classNames([style.blog, style["blog--with-pics"]]) : style.blog;
    const titleDecorClass = classNames(["unselectable", style["title-decor"]])

    
    return (
        <article 
            className={blogClass} 
            aria-hidden={isFake ? "true" : "false"}>
            <div className={style["title-wrapper"]}>
                <span className={titleDecorClass}>“</span>
                {title}
            </div>
            <div className={style.body}>
                <div className={style.content}>
                    <p className={style.text}> {blog.text} </p>
                    { blog.pictures && 
                        <PicturesList 
                            pictures = {blog.pictures} 
                            listClassName={style.pics}
                            itemClassName={style["pics-item"]}
                            pictureClassName={style["pics-image"]}
                            isFake={props.isFake}/> }
                    <div className={style["content__bottom-row"]}>
                        { props.isFake ? fakeLink : trueLink }
                        { props.isFake && <User isFake={true} theme="white" className={style.user}/>}
                        {!props.isFake && 
                            <User 
                                isFake={false} 
                                databaseSelector="id_user"
                                dbSelectorValue={blog.id_user}
                                theme="white" 
                                className={style.user}/>}
                    </div>
                </div>
            </div>
        </article>
    )
}


export default Blog