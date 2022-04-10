// third-party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";


const SignInForm: React.FC = () => {
    return (
        <form className={style.form}>
            <label className={classNames(["labeled-input", style.label])}>
                <div className="labeled-input__title">Nickname:</div>
                <input 
                    className={classNames(["labeled-input__input", style.input])}
                    type="text" 
                    placeholder="your nick"
                    required>
                </input>
            </label>
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
            <button 
                className={classNames(["btn", "btn--black", style.btn])} 
                type="submit"> Sign in
            </button>
            <div className={style["gray-link-wrapper"]}>
                <a 
                    className={classNames(["gray-link", style["gray-link"]])}
                    href="/"> Log in if you already have an account
                </a>
            </div> 
        </form>
    )
}


export default SignInForm