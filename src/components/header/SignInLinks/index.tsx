// third-party
import { NavLink } from "react-router-dom";
import classNames from "classnames";

// local imports
import style from "./style.module.scss";


const SignInLinks: React.FC = () => {

    const setActive = (params: {isActive: boolean}) => {
        return {
            color: params.isActive ? 'var(--light-green-col)' : ''
        }
    }

    return (
        <nav className={style["nav"]}>
            <ul className={style["list"]}>
                <li>
                    <NavLink className={classNames([style["link"], style["first"]])} 
                        style={setActive}
                        to="/log-in">Log in&nbsp;
                    </NavLink> 
                    <span className={style["decor"]}>/</span>
                </li>
                <li>
                    <NavLink className={classNames([style["link"], style["second"]])}
                        style={setActive}
                        to="/sign-in">&nbsp;Sign in
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default SignInLinks