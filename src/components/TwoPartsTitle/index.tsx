// third-party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { TwoPartsTitleI } from "./type";


const TwoPartsTitle: React.FC<TwoPartsTitleI> = (props) => {
    return (
        <h1 className={classNames([style.title, "unselectable"])}>
            <span className={style["desktop-title"]}>
                {props.bigPart}<br></br>{props.smallPart}
            </span>
            <div className={style["two-parts-title"]}>
                <span className={style["two-parts-title--big"]}>
                    {props.bigPart}
                </span>
                <span className={style["two-parts-title--small"]}>{props.smallPart}</span>
            </div>
        </h1>
    )
}

export default TwoPartsTitle