// local imports
import { User } from "../User";
import style from "./style.module.scss";
import { CommentComponentI } from "./type";


const Comment: React.FC<CommentComponentI> = (props) => {
    return (
        <div className={props.className}>

            <article className={style.comment}>
                <header className={style.header}>
                    <User 
                        className={style.user}
                        theme="black" 
                        isFake={true}/>
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