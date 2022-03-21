import style from "./style.module.scss";
import classNames from "classnames";

const LogInForm: React.FC = () => {
    return (
        <form className={style.form}>
            <label className={classNames(["labeled-input", style.label])}>
                <div className="labeled-input__title">Mail:</div>
                <input 
                    className={classNames(["labeled-input__input", style.input])}
                    type="email" 
                    placeholder="your email"
                    required>
                </input>
            </label>
            <label className={classNames(["labeled-input", style.label])}>
                <div className="labeled-input__title">Password:</div>
                <input 
                    className={classNames(["labeled-input__input", style.input])}
                    type="password"
                    placeholder="your password"
                    required>
                </input>
            </label>
            <div>
                <a className={classNames(["blue-link", style["blue-link"]])} 
                    href="/"> Forgot password?
                </a>
            </div>
            <button 
                className={classNames(["btn", "btn--black", style.btn])} 
                type="submit"> Log in
            </button>
            <div className={style["gray-link-wrapper"]}>
                <a 
                    className={classNames(["gray-link", style["gray-link"]])}
                    href="/"> Sign in if you don't have an account
                </a>
            </div> 
        </form>
    )
}


export default LogInForm