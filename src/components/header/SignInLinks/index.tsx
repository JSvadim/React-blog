import style from "./style.module.scss";


const SignInLinks: React.FC = () => {
    return (
        <nav>
            <ul className={style["login-link__list"]}>
                <li>
                    <a className={style["login-link"]} href="/">Log in&nbsp;</a> 
                    <span className={style["login-link__decor"]}>/</span>
                </li>
                <li>
                    <a className={style["login-link"]} href="/">&nbsp;Sign in</a>
                </li>
            </ul>
        </nav>
    )
}


export default SignInLinks