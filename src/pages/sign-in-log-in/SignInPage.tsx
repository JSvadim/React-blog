import style from "./style.module.scss";
import classNames from "classnames";

const SignIn: React.FC = () => {
    return (
        <div className={classNames([style.container, 'container'])}>
            <h1 className={classNames([style.title, "unselectable"])}>
                <span className={style["desktop-title"]}>
                    SIGN <br></br>in
                </span>
                <div className={style["two-parts-title"]}>
                    <span className={style["two-parts-title--big"]}>SIGN</span>
                    <span className={style["two-parts-title--small"]}>in</span>
                </div>
            </h1>
            <div className={style["form-wrapper"]}>
                {/* <LogInForm/> */}
            </div>
        </div>
    )
}

export default SignIn