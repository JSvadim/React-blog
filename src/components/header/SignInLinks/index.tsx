// hooks 
import { useTypedSelector } from "../../../hooks/useTypedSelector";

// third-party
import { NavLink } from "react-router-dom";
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { setActiveLinkStyle } from "../helpers";
import { SignInLinksComponentI } from "./type";
import { signInLinksVocabulary } from "../../../vocabulary/components/SignInLinks";


const SignInLinks: React.FC<SignInLinksComponentI> = (props) => {

    const { language } = useTypedSelector(state => state.language);
    const { closeMenu } = props;

    return (
        <nav className={classNames([style["nav"], "unselectable"])}>
            <ul className={style["list"]}>
                <li>
                    <NavLink className={classNames([style["link"], style["first"], "unselectable"])} 
                        style={setActiveLinkStyle} 
                        onClick={closeMenu}
                        to="/log-in">
                            {signInLinksVocabulary.logIn[language]}
                            &nbsp;
                    </NavLink> 
                    <span className={style["decor"]}>/</span>
                </li>
                <li>
                    <NavLink className={classNames([style["link"], style["second"], "unselectable"])}
                        style={setActiveLinkStyle} 
                        onClick={closeMenu}
                        to="/sign-in">
                            &nbsp;
                            {signInLinksVocabulary.signIn[language]}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default SignInLinks