// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { ButtonCloseComponentI } from "./type";


const ButtonClose:React.FC<ButtonCloseComponentI> = (props) => {
    return (
        <div className={props.sizesClass}>
            <button 
                className={classNames([
                    style["button"],
                    style[`button-${props.theme}`],
                    style[`button-${props.type}`],
                    "unselectable"
                ])}
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