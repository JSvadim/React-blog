// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { PaginationI } from "./type";


const Pagination: React.FC<PaginationI> = (props) => {

    const navClassName = classNames([style.nav || '', props.className || '']);

    return (
        <nav className={navClassName}>
            <ul className={style["list"]}>
                <li className={style["item"]}>
                    <button className={style["button"]}>
                        1
                    </button>
                </li>
                <li className={style["item"]}>
                    <button className={style["button"]}>
                        2
                    </button>
                </li>
                <li className={style["item"]}>
                    <button className={style["button"]}>
                        3
                    </button>
                </li>
                <li className={style["item"]}>
                    <button className={style["button"]}>
                        4
                    </button>
                </li>
                <li className={style["item"]}>
                    <button className={style["button"]}>
                        5
                    </button>
                </li>
                <li className={style["item"]}>
                    <button className={classNames([style["button"], style["button--all"]])}>
                        ...
                    </button>
                </li>
                <li className={style["item"]}>
                    <button className={style["button"]}>
                        16
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination