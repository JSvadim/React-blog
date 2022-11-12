// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { ButtonCloseI } from "./type";


const ButtonClose:React.FC<ButtonCloseI> = (props) => {
    return (
        <div className={props.sizesClass}>
            <button 
                className={classNames([
                    style["button"],
                    style[`button-${props.theme}`],
                    style[`button-${props.type}`]])}
                    type="reset"  
                onClick={() => props.onClick()}
            >
                <div className={style.cross}>
                    <div className={style["cross-part"]}/>
                    <div className={style["cross-part"]}/>
                </div>
            </button>
            
        </div>
    )
}

export default ButtonClose