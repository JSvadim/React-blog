// local imports
import { User } from "../User";
import style from "./style.module.scss";
import { CommentComponentPropsI } from "./type";


const Comment: React.FC<CommentComponentPropsI> = (props) => {
    return (
        <div className={props.className}>

            <article className={style.comment}>
                <header className={style.header}>
                    <User 
                        sizingClass={style.user}
                        theme="black" 
                        userNickname="angela"/>
                    <time className={style.date}>{props.date}</time>
                </header>
                <p className={style.text}>
                    {props.text}
                </p>
            </article>

        </div>
    )
}

export default Comment