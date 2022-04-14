// third-party
import { NavLink } from "react-router-dom";

// local imports
import style from "./style.module.scss";


const SignInLinks: React.FC = () => {

    const setActive = (params: {isActive: boolean}) => {
        return {
            color: params.isActive ? 'var(--light-green-col)' : ''
        }
    }

    return (
        <nav>
            <ul className={style["login-link__list"]}>
                <li>
                    <NavLink className={style["login-link"]} 
                        style={setActive}
                        to="/log-in">Log in&nbsp;
                    </NavLink> 
                    <span className={style["login-link__decor"]}>/</span>
                </li>
                <li>
                    <NavLink className={style["login-link"]}
                        style={setActive}
                        to="/sign-in">&nbsp;Sign in
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default SignInLinks