// third-party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { blogI, PicturesListI } from "./type";


const PicturesList: React.FC<PicturesListI> = (props) => {
    return (
        <ul className={style.pics}>
            {props.pics.map((image, index) => {
                    return (
                        <li className={style["pics-item"]} key={index}>
                            <img className="liquid-pic" 
                                src={props.pics[index]}
                                alt={`blog picture number ${index + 1}`}></img>
                        </li>
                    )
            })}
        </ul>
    )
}


const Blog: React.FC<blogI> = (props) => {

    const fakeLink = <span className={classNames([style["read-all-link"], "unselectable"])}>read all blog...</span>;
    const trueLink = <a className={classNames([style["read-all-link"], "unselectable"])} href="/">read all blog...</a>;

    return (
        <article 
            className={props.pics ? classNames([style.blog, style["blog--with-pics"]]) : style.blog} 
            aria-hidden={props.isFake ? "true" : "false"}>
            <div className={style["title-wrapper"]}>
                <span className={classNames(["unselectable", style["title-decor"]])}>“</span>
                <h3 className={style.title}>{props.title}</h3>
            </div>
            <div className={style.body}>
                <div className={style.content}>
                    <p className={style.text}> {props.text} </p>
                    { props.pics ? <PicturesList pics = {props.pics}/> : "" }
                    { props.isFake ? fakeLink : trueLink }
                </div>
            </div>
        </article>
    )
}


export default Blog