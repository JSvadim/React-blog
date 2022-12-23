// third-party
import { NavLink } from "react-router-dom";
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { setActiveLinkStyle } from "../helpers";


const SignInLinks: React.FC = () => {
    return (
        <nav className={style["nav"]}>
            <ul className={style["list"]}>
                <li>
                    <NavLink className={classNames([style["link"], style["first"], "unselectable"])} 
                        style={setActiveLinkStyle}
                        to="/log-in">Log in&nbsp;
                    </NavLink> 
                    <span className={style["decor"]}>/</span>
                </li>
                <li>
                    <NavLink className={classNames([style["link"], style["second"], "unselectable"])}
                        style={setActiveLinkStyle}
                        to="/sign-in">&nbsp;Sign in
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default SignInLinks