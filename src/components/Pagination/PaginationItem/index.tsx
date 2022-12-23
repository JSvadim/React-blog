// third party
import classNames from "classnames";

// local imports
import { PaginationItemComponentI } from "./type";
import style from "./style.module.scss";


export const PaginationItem: React.FC<PaginationItemComponentI> = (props) => {

    const itemClassName = classNames([style["item"], props.isActive ? style["item--active"] : ""]);
    const buttonClassName = classNames([style["button"], "unselectable"]);


    return (
        <li className={itemClassName}>
            {props.isEllipsis && 
                <span className={style["button"]}>
                    ...
                </span>
            }
            {!props.isEllipsis && 
            <button 
                onClick={() => {props.onClick(props.pageNumber)}}
                className={buttonClassName}>
                    {props.pageNumber}
            </button>}
        </li>
    )
}